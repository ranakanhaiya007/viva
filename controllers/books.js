const Book = require("../models/book");

//creating
exports.createBook = async (req, res) => {
  const { title, author, genre, publicationYear, ISBN } = req.body;
  const newBook = new Book({ title, author, genre, publicationYear, ISBN });
  const details= await newBook.save();
  // console.log("api chl gayi");
  console.log(details)
  res.status(201).json({message:details});
};

//for all bookss

exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.JSON({ books });
};

//get books by id

exports.getBooksById = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json({ book });
};

//Update book

exports.updateBook = async (req, res) => {
  const { title, author, genre, publicationYear, ISBN } = req.body;

  const book = await Book.findByIdAndUpdate(
    req.params.id,
    { title, author, genre, publicationYear, ISBN },
    { new: true }
  );

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json({ message: "Book updated successfully", book });
};

// delete book

exports.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted successfully' });
  };
