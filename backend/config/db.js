const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        //const conn= await mongoose.connect(process.env.MONGOBD_URI,{
       ///const conn= await mongoose.connect('mongodb+srv://mari:<marirata1>@cluster0.vmkf6zc.mongodb.net/test',{
        const conn= await mongoose.connect('mongodb+srv://mari:<marirata1>@cluster0.vmkf6zc.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser:true
        });

        console.log(`MongoDB Connected`);
        
    } catch(error){
        console.log('Error: ', error.message);
    }
};

module.exports = connectDB;