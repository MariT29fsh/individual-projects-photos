import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({image, productTitle, prodDescrip,prodLink}) => {
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
                    <button  type="submit" className="btn btn-primary btn-block mb-4">Create</button>
                    <Link to={prodLink}><h6>Delete</h6></Link>
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default Card;