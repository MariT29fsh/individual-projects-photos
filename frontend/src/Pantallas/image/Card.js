import React from 'react'

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
                        <h2 className="font-weight-semibold mb-2">{productTitle} </h2> 
                        <h6>{prodDescrip}</h6>
                    </div>      
                </div>
            </div>
        </div>
    </>
  )
}

export default Card;