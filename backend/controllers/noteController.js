const Product = require("../models/noteModel");
const cloudinary = require('../utils/cloudinary');



exports.createProduct = async (req, res, next)=>{

    const {name, description, image} = req.body;


    try {
        const result = await cloudinary.uploader.upload(image, {
            folder: "notes",
        })
        const product = await Product.create({
            name,
            description,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
        });
        res.status(201).json({
            success: true,
            product
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }
   
}
