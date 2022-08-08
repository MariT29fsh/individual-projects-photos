const express = require("express");
const notes =require('./data/notes');
const dotenv= require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/product');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const {cloudinary} =require('./utils/cloudinary')
const multer= require('multer');
const upload=multer();
const sanitizeHTML =require('sanitize-html')
const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.use(express.static("public"))

var cors = require('cors');
app.use(cors())

const corsOptions={
origin:'http://localhost:3000', 
credentials:true,            //access-control-allow-credentials:true
optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req,res)=> {
    res.send("API is running");
    res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
});

app.get('/api/notes', (req,res)=>{
    res.json(notes);
})
 app.use('/api/users', userRoutes);

 app.use("/api", productRoutes)

app.use(notFound);
app.use(errorHandler);
const PORT= process.env.PORT || 3001;

app.listen(PORT,console.log("Server started on PORT ", PORT));
