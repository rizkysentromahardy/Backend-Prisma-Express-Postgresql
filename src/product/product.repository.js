const prisma = require("../db");

const findProducts = async () => {
    const product = await prisma.product.findMany()

    return product
}
const findProductsById = async (id) => {
    const product = await prisma.product.findUnique({
        where:{
            id : Number(id)
        }
    })

    return product
}
const insertProductsById = async (productDatas) => {
    const product = await prisma.product.create({
        data:{
          name : productDatas.name,
          price: productDatas.price,
          discription: productDatas.discription,
          image: productDatas.image,
        }
      })
      return product
}
const deleteProducts = async (id) => {
    await prisma.product.delete({
        where:{
          id:Number(id),
        }
      })
}
const editProducts = async (id,productDatas) => {
    const product = await prisma.product.update({
        where:{
            id:Number(id)
        },
        data:{
          name:productDatas.name,
          price:productDatas.price,
          discription:productDatas.discription,
          image:productDatas.image
        }
      })
      return product
}




module.exports = {
    findProducts,
    findProductsById,
    insertProductsById,
    deleteProducts,
    editProducts,
}