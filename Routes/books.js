const express = require('express')
const bookController = require('../controllers/books')

const router = express.Router()

//create
router.post('/',bookController.createBook)

//get all books

router.get('/',bookController.getBooks)
//get book by id

router.get('/:id',bookController.getBooksById)

//update

router.patch('/:id',bookController.updateBook)

//delete

router.delete('/:id',bookController.deleteBook)

module.exports = router;
