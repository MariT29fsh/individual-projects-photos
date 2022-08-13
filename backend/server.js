const express = require("express");
const notes =require('./data/notes');
const dotenv= require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/product');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const {cloudinary} =require('./utils/cloudinary');
const multer= require('multer');
const upload=multer();
const sanitizeHTML =require('sanitize-html');
const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.use(express.static("public"))

var cors = require('cors');
app.use(cors(corsOptions))

const corsOptions={
origin:process.env.PATHHEROKU || "*", 
credentials:true,            //access-control-allow-credentials:true
optionSuccessStatus:200
}
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.get('/', (req,res)=> {
    res.send("API is running");
    res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
});

app.use("/api/mynotes", productRoutes);

app.get('/api/notes', (req,res)=>{
    res.json(notes);
})
 app.use('/api/users', userRoutes);


/* */
app.get('/api/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:dev_setups')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});

//app.post('/mynotes/create',)
app.post('/api/upload', async (req, res) => {
    console.log('llega aqui');
    try {
        const fileStr = req.body.data;
        console.log('llega aqui');
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups',
        });
        console.log(uploadResponse);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

app.use(notFound);
app.use(errorHandler);
const host=process.env.HOST || '0.0.0.0';
const PORT= process.env.PORT || 3001;

app.listen(PORT,console.log("Server started on PORT ", PORT));
