const express = require('express')
const app =express()
var cors = require('cors')
const productController = require('./product/product.controller')

const port = process.env.PORT

//midelware
app.use(express.json())
app.use(cors())

app.use('/products',productController)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})