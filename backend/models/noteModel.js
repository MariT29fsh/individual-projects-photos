const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const productSchema = mongoose.Schema(
    {

   title: {
       type: String,
       maxlength: 32
   },

   description: {
       type: String,
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

const Product =mongoose.model('Product',productSchema);
module.exports=Product;
//module.exports = mongoose.model("Product", productSchema);