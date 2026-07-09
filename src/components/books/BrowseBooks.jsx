"use client";

import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import BookSearch from "./BookSearch";
import BookFilter from "./BookFilter";
import Pagination from "./Pagination";
import BookSkeleton from "./BookSkeleton";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function BrowseBooks() {
  const [books, setBooks] = useState([]);
  const [meta, setMeta] = useState({});

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [sort, setSort] = useState("");

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchBooks();
  }, [page, search, category, sort]);

  async function fetchBooks() {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      params.append("page", page);

      params.append("limit", 8);

      if (search) params.append("search", search);

      if (category) params.append("category", category);

      if (sort) params.append("sort", sort);

      const res = await fetch(`${API}/books?${params.toString()}`);

      const data = await res.json();

      setBooks(data.data.books);

      setMeta(data.data.meta);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-10">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Browse Books
      </h1>

      <div className="grid lg:grid-cols-3 gap-4 mb-8">

        <BookSearch
          search={search}
          setSearch={setSearch}
        />

        <BookFilter
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />

      </div>

      {loading ? (
        <BookSkeleton />
      ) : books.length === 0 ? (
        <div className="text-center py-20">

          <h2 className="text-3xl font-bold">
            No Books Found
          </h2>

          <p className="text-gray-500 mt-2">
            Try another search.
          </p>

        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

            {books.map((book) => (
              <BookCard
                key={book._id}
                book={book}
              />
            ))}

          </div>

          <Pagination
            page={page}
            setPage={setPage}
            meta={meta}
          />
        </>
      )}
    </section>
  );
}