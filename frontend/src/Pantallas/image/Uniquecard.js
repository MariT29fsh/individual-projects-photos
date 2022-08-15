import React, {  useState,useEffect } from 'react'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Unique = (p) => {
    const [product,setProduct]=useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState([]);
    const navigate=useNavigate();


    const fetchProduct =async () =>{
        
        try{
            const data = await axios.get(`https://backend-photos.herokuapp.com/api/mynotes/product/${p.match.params._id}`);
            //const data  =await res.json();
            const response= await data.response;
            console.log(data);
            console.log(response)
            setProduct(data);
            setTitle(data.title);
            setDescription(data.description)
            setImage(data.image.url)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchProduct();
   });

    return (
        <>
            <div className="col-md-4 " style={{marginTop: "20px"}}>
                <div className="card">
                    <div className="card-body">
                        <div className="card-img-actions"> <img src={image} className="card-img img-fluid"  alt="" /> </div>
                    </div>
                    <div className="card-body bg-light text-center">
                        <div className="mb-2">
                            <h2 className="font-weight-semibold mb-2">{title} </h2> <a href="#" className="text-muted" data-abc="true"></a>
                            <h6>{description}</h6>
                        </div>
                   
                        <Button ><h6>Delete</h6></Button>
                        <Button >Edit</Button>
                       
                    </div>
                </div>
            </div>
        </>
      )
    }
    export default Unique;