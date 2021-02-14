/*
  ## Buscando e contando dados em Arrays

  Baseando no Array de Libros por Categoria abaixo, faça os seguintes desafios:

  - Contar o número de categorias e o número de livros em cada categoria
  - Contar o número de autores
  - Mostrar livros do autor Augusto Cury
  - transforma a função acima em uma função que irá receber o nome do autor e devolver os livros do mesmo
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

function NumberOfBooksPerCategory(list = []) {
  for (item of list) {
    console.log(
      `A categoria "${item.category}" possui ${item.books.length} livros`
    );
  }
}

function NumberOfDiferentAuthors(list = []) {
  const authors = [];
  for (item of list) {
    for (book of item.books) {
      if (!authors.includes(book.author)) {
        authors.push(book.author);
      }
    }
  }
  console.log(
    `Existem o total de ${authors.length} autores diferentes:`,
    authors
  );
}

function BooksPerAuthor(list = [], author = "") {
  const books = [];
  for (item of list) {
    for (book of item.books) {
      if (book.author.toLowerCase().includes(author.toLowerCase())) {
        books.push(book);
      }
    }
  }
  console.log(`Livros de ${author}`, books);
}

console.log(`O total de categoria é de ${booksByCategory.length}`);
NumberOfBooksPerCategory(booksByCategory);
NumberOfDiferentAuthors(booksByCategory);

BooksPerAuthor(booksByCategory, "Augusto");
BooksPerAuthor(booksByCategory, "Covey");
