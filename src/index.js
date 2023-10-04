const { PrismaClient } = require('@prisma/client')
const express = require('express')
const app = express()

const prisma = new PrismaClient()
const port = 3000

app.get('/api', (req, res) => {
  res.send('Ini Contoh')
})

app.get('/product',async (req,res) => {
  const products = await prisma.product.findMany()

  res.send(products)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})