const express = require('express')
const app =express()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const port = 3000

//midelware
app.use(express.json())


//get data
app.get('/api', (req, res) => {
  res.send('Ini Contoh')
})

//get data menggunakan async 
app.get('/products',async (req,res) => {
  const products = await prisma.product.findMany()
  res.send(products)
})


//post data menggunakan async
app.post('/product', async (req,res) => {
  const {name , price , discription,image} = req.body
  const product = await prisma.product.create({
    data:{
      name,
      price,
      discription,
      image,
    }
  })
  res.send({
    data:product,
    message:"berhasil menambah barang"
    
  })
})

app.delete('/products/:id',async (req,res) => {
const productId =req.params.id
await prisma.product.delete({
  where:{
    id:Number(productId),
  }
})
res.send("berhasil menghapus gok")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})