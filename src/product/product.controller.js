const express = require('express')
const prisma = require('../db')
const { getAllProducts, getAllProductsById, createProductsData, deleteProductsById, editProductsById } = require('./product.services')
const router = express.Router()



//get data menggunakan async 
router.get('/',async (req,res) => {
    const products = await getAllProducts()
    res.send(products)
  })  
router.get('/:id',async (req,res) => {
    try {
        const productId = req.params.id 
        const products = await getAllProductsById(productId)

        res.send(products)
    } catch (error) {
        res.status(400).send(error.message)
    }
  })  
  //post data menggunakan async
router.post('/', async (req,res) => {
    try {
        const productDatas = req.body
        const product = await createProductsData(productDatas)
      
        res.send({
          data:product,
          message:"Success add database"      
        })
    } catch (error) {
        res.status(400).send(error.message)
        
    }
  })
  //delete data menggunakan async
router.delete('/:id',async (req,res) => {
  const productId =req.params.id
  await deleteProductsById(productId)

  res.send("Product Deleted")
  })

  //put data menggunakan async
router.put('/:id', async (req,res) => {
    const productId = req.params.id
    const productDatas = req.body
    if(!(productDatas.name && productDatas.price && productDatas.discription && productDatas.image)){
        return res.status(400).send(" Client Missing Field")
      }
    const product = await editProductsById(productId,productDatas)

    res.send({
      data:product,
      message:"Success Update Product"
    })
  })  
  //patch data menggunakan async
router.patch('/:id', async (req,res) => {
    const productId = req.params.id
    const productDatas = req.body
    const product = await editProductsById(productId,productDatas)

  
    res.send({
      data:product,
      message:"Success Update Product"
    })
  }) 
  

module.exports = router;