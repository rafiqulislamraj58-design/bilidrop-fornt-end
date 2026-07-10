"use client";

import { useEffect, useState } from "react";

import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import axiosSecure from "@/lib/axiosSecure";

export default function CheckoutForm({ book }) {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!book?.price) return;

    const createPaymentIntent = async () => {
      try {
        const res = await axiosSecure.post(
          "/payments/create-payment-intent",
          {
            amount: book.price,
          }
        );

        setClientSecret(res.data.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };

    createPaymentIntent();
  }, [book]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    const card = elements.getElement(CardElement);

    if (!card) return;

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setMessage(error.message);

      setLoading(false);

      return;
    }

    const result = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card,
        },
      }
    );

    if (result.error) {
      setMessage(result.error.message);

      setLoading(false);

      return;
    }

    if (result.paymentIntent.status === "succeeded") {
      try {
        await axiosSecure.post("/payments/save", {
          bookId: book._id,
          amount: book.price,
          paymentIntentId: result.paymentIntent.id,
          transactionId: result.paymentIntent.id,
        });

        window.location.href = "/payment/success";
      } catch (err) {
        console.log(err);
      }
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="border rounded-xl p-5">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
              },
            },
          }}
        />
      </div>

      <button
        disabled={
          !stripe ||
          !clientSecret ||
          loading
        }
        className="w-full bg-blue-600 hover:bg-blue-700 text-black py-3 rounded-xl font-bold"
      >
        {loading
          ? "Processing..."
          : `Pay $ ${book.price}`}
      </button>

      {message && (
        <p className="text-red-600">
          {message}
        </p>
      )}
    </form>
  );
}