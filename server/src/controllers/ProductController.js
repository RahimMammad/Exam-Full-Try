import ProductSchema from "../models/ProductSchema.js"

export const getProducts = async (req, res) => {
    try {
        const products = await ProductSchema.find({})
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await ProductSchema.findById(req.params.id)
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const createProduct = async (req, res) => {
    try {
        const {name, image, price} = req.body
        const newProduct = new ProductSchema({name, image, price})
        newProduct.save()
        res.status(200).send({msg: "Added"})
    } catch (error) {
        res.status(500).send(error)
    }
}

export const updateProduct = async (req, res) => {
    try {
        const {name, image, price} = req.body
        const updateProduct = await ProductSchema.findByIdAndUpdate(req.params.id)
        if(updateProduct) {
            updateProduct.name = name,
            updateProduct.image = image,
            updateProduct.price = price
        }
        newProduct.save()
        res.status(200).send({msg: "Updated"})
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await ProductSchema.findByIdAndDelete(req.params.id)
        res.status(200).send({msg: "Deleted"})
    } catch (error) {
        res.status(500).send(error)
    }
}