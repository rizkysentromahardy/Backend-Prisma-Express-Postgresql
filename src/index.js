const express = require('express')
const app =express()
const productController = require('./product/product.controller')

const port = 3000

//midelware
app.use(express.json())

app.use('/products',productController)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})