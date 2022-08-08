const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const productSchema = new mongoose.Schema({

   name: {
       type: String,
       trim: true,
       required : [true, 'Please add a product Name'],
       maxlength: 32
   },

   description: {
       type: String,
       trim: true,
       required : [true, 'Please add a product Description'],
       maxlength: 2000,
   },


   image: {
       public_id: {
           type: String,
           required: true
       },
       url: {
           type: String,
           required: true
       }
   
   },
 


}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema);