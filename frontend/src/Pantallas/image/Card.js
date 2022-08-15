import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import Unique from './Uniquecard';

const Card = ({image, productTitle, prodDescrip,prodLink}) => {
    const navigate=useNavigate();
    const deleteCard = async() =>{
        try {
            const data = await axios.delete(`https://backend-photos.herokuapp.com/api/mynotes/product/delete/${prodLink}`);
            navigate('/home');
            //console.log(data.res.json());
    
        } catch (error) {
            console.log(error);
        }
    
       }
  return (
    <>
        <div className="col-md-4 " style={{marginTop: "20px"}}>
            <div className="card">
                <div className="card-body">
                    <div className="card-img-actions"> <img src={image} className="card-img img-fluid"  alt="" /> </div>
                </div>
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <h2 className="font-weight-semibold mb-2">{productTitle} </h2> <a href="#" className="text-muted" data-abc="true"></a>
                        <h6>{prodDescrip}</h6>
                    </div>
                    <button  type="submit" variant="danger" className="btn btn-primary btn-block mb-4" onClick={()=> deleteCard()}>Delete</button>
                    
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default Card;