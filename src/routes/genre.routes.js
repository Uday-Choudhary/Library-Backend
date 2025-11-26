const express = require('express')
const { CreateGenre } = require('../controllers/genre.controllers')
const router = express.Router()

router.post('/create', CreateGenre)

module.exports = router
