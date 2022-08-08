const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        const conn= await mongoose.connect('mongodb://localhost/mir',{
            useNewUrlParser:true
        });

        console.log(`MongoDB Connected`);
        
    } catch(error){
        console.log('Error: ', error.message);
    }
};

module.exports = connectDB;