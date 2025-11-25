const express = require('express')
const { CreateBook } = require('../controllers/book.controllers')
const router = express.Router()


router.post('/create' , CreateBook )

// router.get()

module.exports = router