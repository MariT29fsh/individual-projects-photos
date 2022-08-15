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
        /*.then((prods)=>{
            //console.log("products", prods.data.products)
            setProducts(prods.data.products);
            console.log(prods.data.products);
            setCount(prods.data.count);
        })*/
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
                
                <div className="row">
                   <div className="col-sm-3">
                        <h2> Books</h2>
                        <form >
                            <div className="form-group">
                                <select onChange={(e) => setCategory(e.target.value)} name="" id="" className='form-control'>
                                    <option value="Select" disabled >Select</option>
                                    {
                                        categories && categories.map(cat=>(
                                            <option value={cat._id}>{cat.title}</option>
                                        ))
                                    }
                                    <option value="">All</option>
                                </select>
                            </div>
                            {/* <button onClick={filterProduct} type='submit' className='btn btn-primary mt-3'>Filter</button> */}
                        </form>
                   </div>
                   <div className="col-sm-9">
                     <div className="row">
                            {
                                products.map((p,key)=>(
                                     //image ={"https://res.cloudinary.com/dmc99lkmj/image/upload/v1660284117/notes/c1b9di6wfv84f2ekeu9w.jpg"}
                                    <Card
                                    image={p.image}
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