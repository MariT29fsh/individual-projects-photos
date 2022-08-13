const express = require('express');
const router = express.Router(); 
const {createProduct,displayProduct,deleteProduct} = require("../controllers/noteController")

//router.route('/login').post(authUser);
//router.use(cors());
router.route('/create').post(createProduct);
//router.get('/all', displayProduct );
//router.delete('/product/delete/:id',  deleteProduct );
//router.post('/create', createProduct );
module.exports = router;