import ProductModal from "../Modals/Product.Modal.js";

import jwt from "jsonwebtoken";


export const addProduct = async (req, res) => {
    // console.log(fulltoken,"fulltoken")
    try {
        const { name, price, image, category } = req.body;
        const{token} = req.body
        if (!name || !price || !image || !category || !token) return res.status(404).json({success: false, message: "All fields are mandtory.." })


        // console.log(name, price, image, category,token);
        // const product = new ProductModal({ name, price, image, category, userId: userId  });

        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        

        if (!decodedData) {
            return res.status(404).json({success: false,  message: "Token not valid." })
        }

        const userId = decodedData.userId;

        const product = new ProductModal({ name, price, image, category, userId: userId });
        await product.save();

        return res.status(201).json({success: true, message: "Product Created Successfully."  })

    } catch (error) {
        return res.status(500).json({ success: false, message :error.message })
    }
}

export const allProducts = async (req, res) => {
    try {
        
        const products = await ProductModal.find({});
        if (products.length) {
            return res.status(200).json({status: 200, sucess:true, products: products })
        }
        return res.status(404).json({status: "error", message: "No products found" })

    } catch (error) {
        return res.status(500).json({ status: "error", error: error.message})
    }
}
export const getYourProducts = async (req, res) => {
    try {
        const { token } = req.body;

        const decodedData = jwt.verify(token, process.env.JWT_SECRET)

        if (!decodedData) {
            return res.status(404).json({success: false, message: "Token not valid." })
        }

        const userId = decodedData?.userId;

        const yourProducts = await ProductModal.find({userId})

        // console.log(yourProducts,"yourProducts" )

        if (yourProducts) {
            return res.status(200).json({ success: true, products: yourProducts })
        }

        return res.status(404).json({ success: false,message: "No products found." })

    } catch (error) {
        return res.status(500).json({  success: false,  error: error.message })
    }
}


export const updateYourProduct = async (req, res) => {
    try {
        const { productId, name, image, price, category, token } = req.body;
        if (!token) return res.status(404).json({ status: "error", message: "Token is mandtory.." })

        const decodedData = jwt.verify(token, process.env.JWT_SECRET)

        if (!decodedData) {
            return res.status(404).json({ status: "error", message: "Token not valid." })
        }

        const userId = decodedData.userId;

        const updatedProduct = await ProductModal.findOneAndUpdate({ _id: productId, userId: userId }, { name, image, price, category }, { new: true })

        if (updatedProduct) {
            return res.status(200).json({ status: "Sucess", product: updatedProduct })
        }
        return res.status(404).json({ status: "error", message: "You are trying to update product which is not yours.." })

    } catch (error) {
        return res.status(500).json({ status: "error", error: error.message })
    }
}