const express = require('express')
const { CreateGenre, UpdateGenre } = require('../controllers/genre.controllers')
const router = express.Router()
router.get('/:id')
router.post('/create', CreateGenre)
router.put('/update', UpdateGenre)

module.exports = router
