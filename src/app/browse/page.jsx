import Image from "next/image";

async function getBooks() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/books`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}

export default async function BooksPage() {
  const result = await getBooks();

  const books = result.data.books;

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        All Books
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={
                book.coverImage ||
                "https://placehold.co/400x600?text=No+Image"
              }
              alt={book.title}
              width={400}
              height={600}
              className="w-full h-72 object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold text-xl">
                {book.title}
              </h2>

              <p className="text-gray-600">
                {book.author}
              </p>

              <p className="mt-2">
                Category: {book.category}
              </p>

              <p className="font-semibold mt-2">
                ৳ {book.price}
              </p>

              <p
                className={`mt-2 ${
                  book.status === "available"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {book.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}