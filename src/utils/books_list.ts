const generateRandomDate = () => {
  const startDate = new Date(2000, 0, 1);
  const endDate = new Date();
  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
};

const booksList = [
  {
    id: "fd6c8637-8eb7-4c13-878f-6c9485d34cea",
    category: "Ficção",
    bookName: "1984",
    coverUrl:
      "https://cdn.discordapp.com/attachments/971787111470596136/1199930849647398932/61t0bwt1s3L.png?ex=65c455b0&is=65b1e0b0&hm=9b6b8093fb97838b702f873c523f16b068f22727464c8a2e3ba4abb2228a7e0d&",
    author: "George Orwell",
    rating: 80,
    price: 39.99,
    publicationDate: generateRandomDate(),
    pageCount: 336,
    language: "Português",
    reviews: [
      { reviewerName: "Alice", comment: "Um livro impactante!", rating: 80 },
      {
        reviewerName: "Bob",
        comment: "Muito relevante até hoje.",
        rating: 80,
      },
    ],
  },
  {
    id: "04286629-90f9-4d9d-a35f-eee560261854",
    category: "Ficção",
    bookName: "Crime e Castigo",
    coverUrl:
      "https://m.media-amazon.com/images/I/81C1c9Ec03L._AC_UF1000,1000_QL80_.jpg",
    author: "Fyodor Dostoevsky",
    rating: 80,
    price: 45.99,
    publicationDate: generateRandomDate(),
    pageCount: 544,
    language: "Português",
    reviews: [
      {
        reviewerName: "Carol",
        comment: "Uma obra-prima da literatura.",
        rating: 90,
      },
      { reviewerName: "David", comment: "Muito profundo.", rating: 80 },
    ],
  },
  {
    id: "c844a189-279e-42f4-8af7-bcb417e64866",
    category: "Não Ficção",
    bookName: "Sapiens - Uma Breve História da Humanidade",
    coverUrl:
      "https://m.media-amazon.com/images/I/710evbXqM2L._AC_UF1000,1000_QL80_.jpg",
    author: "Yuval Noah Harari",
    rating: 80,
    price: 49.99,
    publicationDate: generateRandomDate(),
    pageCount: 464,
    language: "Português",
    reviews: [
      { reviewerName: "Carol", comment: "Leitura essencial!", rating: 95 },
      { reviewerName: "David", comment: "Muito informativo.", rating: 90 },
    ],
  },
  {
    id: "d880700f-452c-483a-a945-80e72d09339b",
    category: "Não Ficção",
    bookName: "O Poder do Hábito",
    coverUrl: "https://m.media-amazon.com/images/I/51EjznhyV+L.jpg",
    author: "Charles Duhigg",
    rating: 80,
    price: 34.99,
    publicationDate: generateRandomDate(),
    pageCount: 416,
    language: "Português",
    reviews: [
      { reviewerName: "Emily", comment: "Transformador!", rating: 90 },
      {
        reviewerName: "Frank",
        comment: "Ótimo livro sobre hábitos.",
        rating: 80,
      },
    ],
  },
  {
    id: "ba3834e8-c5f4-4656-9a12-d2226619af9a",
    category: "Fantasia",
    bookName: "Harry Potter e as Relíquias da Morte",
    coverUrl:
      "https://m.media-amazon.com/images/I/81PHloIwKnL._AC_UF1000,1000_QL80_.jpg",
    author: "J.K. Rowling",
    rating: 80,
    price: 55.99,
    publicationDate: generateRandomDate(),
    pageCount: 320,
    language: "Português",
    reviews: [
      {
        reviewerName: "Hermione",
        comment: "Um clássico moderno!",
        rating: 95,
      },
      { reviewerName: "Ron", comment: "Adoro o mundo mágico.", rating: 100 },
    ],
  },
  {
    id: "4f57c63d-0216-450a-b8cd-0d16debdbecc",
    category: "Fantasia",
    bookName: "O Hobbit",
    coverUrl:
      "https://m.media-amazon.com/images/I/81r9qcUZzEL._AC_UF1000,1000_QL80_.jpg",
    author: "J.R.R. Tolkien",
    rating: 80,
    price: 42.99,
    publicationDate: generateRandomDate(),
    pageCount: 320,
    language: "Português",
    reviews: [
      {
        reviewerName: "Gandalf",
        comment: "Uma jornada incrível.",
        rating: 95,
      },
      {
        reviewerName: "Frodo",
        comment: "Um clássico da fantasia.",
        rating: 90,
      },
    ],
  },
  {
    id: "ca5c1e5e-a40f-4a8d-9d71-b34b33de731b",
    category: "Romance",
    bookName: "Orgulho e Preconceito",
    coverUrl:
      "https://m.media-amazon.com/images/I/61JosO2tkdL._AC_UF1000,1000_QL80_.jpg",
    author: "Jane Austen",
    rating: 80,
    price: 37.99,
    publicationDate: generateRandomDate(),
    pageCount: 432,
    language: "Português",
    reviews: [
      {
        reviewerName: "Elizabeth",
        comment: "Um romance atemporal.",
        rating: 95,
      },
      { reviewerName: "Mr. Darcy", comment: "Encantador!", rating: 90 },
    ],
  },
  {
    id: "d881b8be-e2e3-41ff-a11a-2e4d546a811e",
    category: "Romance",
    bookName: "Diário de Uma Paixão",
    coverUrl:
      "https://m.media-amazon.com/images/I/61MpNWtgHCL._AC_UF1000,1000_QL80_.jpg",
    author: "Nicholas Sparks",
    rating: 80,
    price: 29.99,
    publicationDate: generateRandomDate(),
    pageCount: 304,
    language: "Português",
    reviews: [
      {
        reviewerName: "Allie",
        comment: "Uma história emocionante.",
        rating: 90,
      },
      { reviewerName: "Noah", comment: "Amor verdadeiro.", rating: 85 },
    ],
  },
];

export default booksList;
