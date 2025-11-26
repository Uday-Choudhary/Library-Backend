const express = require('express')
const { CreateGenre, UpdateGenre, GetGenre, DeleteGenre } = require('../controllers/genre.controllers')
const router = express.Router()
router.get('/:id' , GetGenre)
router.post('/create', CreateGenre)
router.put('/update', UpdateGenre)
router.delete('/:id' , DeleteGenre)

module.exports = router
