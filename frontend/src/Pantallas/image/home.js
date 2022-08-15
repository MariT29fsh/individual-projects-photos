import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../image/Card';
//import 'antd/dist/antd.css';
//import { Pagination } from 'antd';



const Home = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [count, setCount] = useState(0);

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
    //filter product
    const filterProduct = (e) =>{
        e.preventDefault();
        fetchProduct();
    }

    return (
        <>
            <div className="container pt-5 pb-5">
            <h2> Mis Recuerdos</h2>
                <div className="row">
                   <div className="col-sm-3">                       
                        
                   </div>
                   <div className="col-sm-9">
                     <div className="row">
                            {
                                (products.data || []).map((p,key) =>(                               // products.map((p,key)=>(
                                     //image ={"https://res.cloudinary.com/dmc99lkmj/image/upload/v1660284117/notes/c1b9di6wfv84f2ekeu9w.jpg"}
                                     /*{(getNotes.data || []).map((note: any) => (
        <NoteCard key={note._id} note={note} />
        ))}*/
                                    <Card
                                    image={p.image.url}
                                    productTitle={p.title} 
                                     prodLink={`/product/${p._id}`} 
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