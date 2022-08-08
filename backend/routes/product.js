const express = require('express');
const router = express.Router(); 
const {createProduct} = require("../controllers/noteController")

router.post('/product/create', createProduct );

module.exports = router;