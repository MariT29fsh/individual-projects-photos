import React, {  useState } from 'react'
import axios from 'axios';
//import { toast } from 'react-toastify';

const Create = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState([]);

    //handle and convert it in base 64
    const handleImage = (e) =>{
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file);
    }

    const setFileToBase = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setImage(reader.result);
        }

    }
    
    //submit the form
    const submitForm = async (e) =>{
        e.preventDefault();
        try {
            const {data} = await axios.post('https://animals-photos-list.herokuapp.com/api/mynotes/create', 
            {title, description, image}
            )
            if  (data.success === true){
                setTitle('');
                setDescription('');
                setImage('');
                //toast.success('product created successfully')
            }
            console.log(data);
        } catch (error) {
            console.log(error)
        }

    }

  return (
   <>
     <div className="container custom_class">
        <h2 className="signup_title ">CREATE PRODUCT</h2>
        <form className=" col-sm-6 offset-3 pt-5 signup_form " enctype="multipart/form-data" onSubmit={submitForm}>
            
            <div className="form-outline mb-4">
                <input onChange={(e)=>setTitle(e.target.value)} type="text" id="form4Example1" className="form-control"  value={title}/>
                <label className="form-label" htmlFor="form4Example1">Name</label>
            </div>

            
            <div className="form-outline mb-4">
                <textarea  onChange={(e)=>setDescription(e.target.value)}   type="text" id="form4Example2" className="form-control"  value={description}/>
                <label className="form-label" htmlFor="form4Example2">Description </label>
            </div>          


            <div className="form-outline mb-4">
                <input onChange={handleImage}  type="file" id="formupload" name="image" className="form-control"  />
                <label className="form-label" htmlFor="form4Example2">Image</label>
            </div>
            <img className="img-fluid" src={image} alt="" />
            <button  type="submit" className="btn btn-primary btn-block mb-4">Create</button>
            
         </form>
    </div>  
   </>
  )
}

export default Create;