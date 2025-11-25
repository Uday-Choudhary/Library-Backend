const express = require('express')
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient()

const app = express()

app.get('/catlaog' , (req , res) => {
    const data = prisma.book.findMany()
    console.log(data)
})

app.get('/catalog/:')

app.listen(3000 , () => {
    console.log(`server is listening on port ${3000}`)
})