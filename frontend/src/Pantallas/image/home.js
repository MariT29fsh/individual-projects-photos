import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../image/Card';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const Home = () => {

    const [products, setProducts] = useState([]);

    const fetchProduct =async () =>{
        
        try{
            const data = await axios.get('https://backend-photos.herokuapp.com/api/mynotes/all');
            //const data  =await res.json();
            const response= await data.response;
            console.log(data);
            console.log(response)
            setProducts(data);
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchProduct();
   },[]);



    return (
        <>
            <div className="container pt-5 pb-5">
            <h2> Mis Recuerdos</h2>
                <div className="row">
                   <div className="col-sm-3">                       
                   <Link to='/mynotes/create'>
            <Button style={{marginLeft:10, marginBottom:6}} size="lg">
                Listo para escribir?
            </Button></Link>
                   </div>
                   <div className="col-sm-9">
                     <div className="row">
                            {
                                (products.data || []).map((p,key) =>(                               // products.map((p,key)=>(

                                    <Card
                                    image={p.image.url}
                                    productTitle={p.title} 
                                    prodLink={p._id}
                                     prodDescrip={p.description}/>
                                     
                                )) 
                            }
                     </div>
                   </div>
                </div>         
            </div>
        </>
    )
}

export default Home