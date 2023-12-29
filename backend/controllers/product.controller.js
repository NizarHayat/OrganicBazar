const Product = require('../models/product.model');
const multer = require('multer');
const upload = multer();

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const createProduct = async (req, res) => {
    const {  title, description, price, category, stock } = req.body;
    try {
        const product = new Product({

            title,
            description,
            price,
            category,
            stock,
        });
   
        if (req.file) {
            const imageBuffer = req.file.buffer;
            product.image = imageBuffer.toString('base64');
        }
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateProductById = async (req, res) => {
    try {
        // Fetch the product by ID
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

     
        if (req.body.name != null) {
            product.name = req.body.name;
        }
        if (req.body.title != null) {
            product.title = req.body.title;
        }
        if (req.body.description != null) {
            product.description = req.body.description;
        }
        if (req.body.price != null) {
            product.price = req.body.price;
        }
        if (req.body.category != null) {
            product.category = req.body.category;
        }
        if (req.body.stock != null) {
            product.stock = req.body.stock;
        }

        // Handle the image file separately
        if (req.body.image != null) {
            // Update the image path in the product
            product.image = req.body.image;
        }

     
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



const deleteProductById = async (req, res) => {
    try {
        const productId = req.params.id;

     
        const result = await Product.deleteOne({ _id: productId });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById,
};
