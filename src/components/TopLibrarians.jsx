"use client";

const librarians = [
  {
    id: 1,
    name: "Sarah Ahmed",
    deliveries: 250,
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Rakib Hasan",
    deliveries: 190,
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "John Smith",
    deliveries: 170,
    image:
      "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

export default function TopLibrarians() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Top Librarians
          </h2>

          <p className="text-default-500 mt-3">
            Meet our most trusted book providers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {librarians.map((librarian) => (
            <div
              key={librarian.id}
              className="border rounded-3xl p-8 text-center bg-background hover:shadow-xl transition"
            >
              <img
                src={librarian.image}
                alt={librarian.name}
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-primary"
              />

              <h3 className="text-2xl font-bold mt-5">
                {librarian.name}
              </h3>

              <p className="text-default-500 mt-2">
                Librarian
              </p>

              <div className="mt-5 inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                {librarian.deliveries}+ Deliveries
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}