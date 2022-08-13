const asyncHandler = require('express-async-handler')
const Product = require("../models/noteModel");
//const cloudinary = require('../utils/cloudinary');

const cloudinary= require('cloudinary');
cloudinary.config({
    cloud_name: 'dmc99lkmj',
    api_key: '429392565885329',
    api_secret: 'HSzNIzPlmpQzV_3xWLEwBVVxJpM',
});

const createProduct = asyncHandler(async(req, res) =>{

        const {title, description, image} = req.body;
        try {
            const result = await cloudinary.v2.uploader.upload(image, {
                folder: "notes",
            })
            const product = await Product.create({
                title,
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
            console.log(error.message);
            next(error);
            
        }  
    }
); 

const displayProduct = asyncHandler(async(req, res) =>{
    try{
        const images = await Product.find();
        console.log(images);
    res.status(200).json({ data: images });

           }catch (error) {
            console.log(error);
        }
   
});

// delete product and product image in cloudinary
const deleteProduct =()=>asyncHandler(
    async (req, res)=>{
  
        try {
            const product = await Product.findById(req.params.id);
            //retrieve current image ID
            const imgId = product.image.public_id;
            if (imgId){
              await cloudinary.uploader.destroy(imgId);
            }
           
            const rmProduct = await Product.findByIdAndDelete(req.params.id);
  
            res.status(201).json({
                success: true,
                message:" Product deleted",
    
            })
            
        } catch (error) {
            console.log(error);
            next(error);
            
        }
       
    }
) 

module.exports ={createProduct,displayProduct,deleteProduct};