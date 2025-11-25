const express = require('express')
const {CreateAuthor} = require('../controllers/author.controllers')
const router = express.Router()

router.post('/create' , CreateAuthor)

module.exports = router