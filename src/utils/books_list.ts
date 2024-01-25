const booksList = {
  Ficção: [
    {
      bookName: "1984",
      coverUrl:
        "https://cdn.discordapp.com/attachments/971787111470596136/1199930849647398932/61t0bwt1s3L.png?ex=65c455b0&is=65b1e0b0&hm=9b6b8093fb97838b702f873c523f16b068f22727464c8a2e3ba4abb2228a7e0d&",
      author: "George Orwell",
      rating: 0.9,
      price: 39.99,
      publicationDate: Date.now(),
      pageCount: 336,
      language: "Português",
      reviews: [
        { reviewerName: "Alice", comment: "Um livro impactante!", rating: 0.8 },
        {
          reviewerName: "Bob",
          comment: "Muito relevante até hoje.",
          rating: 0.9,
        },
      ],
    },
    {
      bookName: "Crime e Castigo",
      coverUrl:
        "https://m.media-amazon.com/images/I/81C1c9Ec03L._AC_UF1000,1000_QL80_.jpg",
      author: "Fyodor Dostoevsky",
      rating: 0.85,
      price: 45.99,
      publicationDate: Date.now(),
      pageCount: 544,
      language: "Português",
      reviews: [
        {
          reviewerName: "Carol",
          comment: "Uma obra-prima da literatura.",
          rating: 0.9,
        },
        { reviewerName: "David", comment: "Muito profundo.", rating: 0.8 },
      ],
    },
  ],
  "Não Ficção": [
    {
      bookName: "Sapiens - Uma Breve História da Humanidade",
      coverUrl:
        "https://m.media-amazon.com/images/I/710evbXqM2L._AC_UF1000,1000_QL80_.jpg",
      author: "Yuval Noah Harari",
      rating: 0.95,
      price: 49.99,
      publicationDate: Date.now(),
      pageCount: 464,
      language: "Português",
      reviews: [
        { reviewerName: "Carol", comment: "Leitura essencial!", rating: 0.95 },
        { reviewerName: "David", comment: "Muito informativo.", rating: 0.9 },
      ],
    },
    {
      bookName: "O Poder do Hábito",
      coverUrl: "https://m.media-amazon.com/images/I/51EjznhyV+L.jpg",
      author: "Charles Duhigg",
      rating: 0.88,
      price: 34.99,
      publicationDate: Date.now(),
      pageCount: 416,
      language: "Português",
      reviews: [
        { reviewerName: "Emily", comment: "Transformador!", rating: 0.9 },
        {
          reviewerName: "Frank",
          comment: "Ótimo livro sobre hábitos.",
          rating: 0.85,
        },
      ],
    },
  ],
  Fantasia: [
    {
      bookName: "Harry Potter e as Relíquias da Morte",
      coverUrl:
        "https://m.media-amazon.com/images/I/81PHloIwKnL._AC_UF1000,1000_QL80_.jpg",
      author: "J.K. Rowling",
      rating: 0.98,
      price: 55.99,
      publicationDate: Date.now(),
      pageCount: 320,
      language: "Português",
      reviews: [
        {
          reviewerName: "Hermione",
          comment: "Um clássico moderno!",
          rating: 0.95,
        },
        { reviewerName: "Ron", comment: "Adoro o mundo mágico.", rating: 1.0 },
      ],
    },
    {
      bookName: "O Hobbit",
      coverUrl:
        "https://m.media-amazon.com/images/I/81r9qcUZzEL._AC_UF1000,1000_QL80_.jpg",
      author: "J.R.R. Tolkien",
      rating: 0.92,
      price: 42.99,
      publicationDate: Date.now(),
      pageCount: 320,
      language: "Português",
      reviews: [
        {
          reviewerName: "Gandalf",
          comment: "Uma jornada incrível.",
          rating: 0.95,
        },
        {
          reviewerName: "Frodo",
          comment: "Um clássico da fantasia.",
          rating: 0.9,
        },
      ],
    },
  ],
  Romance: [
    {
      bookName: "Orgulho e Preconceito",
      coverUrl:
        "https://m.media-amazon.com/images/I/61JosO2tkdL._AC_UF1000,1000_QL80_.jpg",
      author: "Jane Austen",
      rating: 0.94,
      price: 37.99,
      publicationDate: Date.now(),
      pageCount: 432,
      language: "Português",
      reviews: [
        {
          reviewerName: "Elizabeth",
          comment: "Um romance atemporal.",
          rating: 0.95,
        },
        { reviewerName: "Mr. Darcy", comment: "Encantador!", rating: 0.9 },
      ],
    },
    {
      bookName: "Diário de Uma Paixão",
      coverUrl:
        "https://m.media-amazon.com/images/I/61MpNWtgHCL._AC_UF1000,1000_QL80_.jpg",
      author: "Nicholas Sparks",
      rating: 0.87,
      price: 29.99,
      publicationDate: Date.now(),
      pageCount: 304,
      language: "Português",
      reviews: [
        {
          reviewerName: "Allie",
          comment: "Uma história emocionante.",
          rating: 0.9,
        },
        { reviewerName: "Noah", comment: "Amor verdadeiro.", rating: 0.85 },
      ],
    },
  ],
};

export default booksList;
