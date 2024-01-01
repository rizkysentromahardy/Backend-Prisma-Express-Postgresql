
const { findProducts, findProductsById, insertProductsById, deleteProducts, editProducts } = require("./product.repository")

const getAllProducts = async () => {
    const products = await findProducts()

    return products
}
const getAllProductsById = async (id) => {
    const products = await findProductsById(id)
    if(!products){
        throw Error("Data Not Found")
    }

    return products
}
const createProductsData = async (productDatas) => {
    const product = await insertProductsById (productDatas)

    return product
}
const deleteProductsById = async (id) => {  
    await deleteProducts (id)

}
const editProductsById = async (id,productDatas) => {
      const product = await editProducts(id,productDatas)
      return product
}

module.exports = {
    getAllProducts,
    getAllProductsById,
    createProductsData,
    deleteProductsById,
    editProductsById,
}