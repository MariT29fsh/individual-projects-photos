import { Button, Form } from 'react-bootstrap';
import { useRef, useState } from "react";
import axios from 'axios';
import './note.css';

const Createnote= () =>{
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const[image,setImage]=useState('');
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleImage =(e)=>{
        const file =e.target.files[0];
        setFileToBase(file);
        console.log(file);
    }
    const setFileToBase= (file) =>{
        const reader =new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=>{
            setImage(reader.result);
        }
    }
    const handleForm= ()=>async (e)=>{
        //e.preventDefault;
        try{
            const{data} = await axios.post('/api/product/create',
            {title,description,image}
            )
            if(data.success == true){
                setTitle('');
                setDescription('');
                setImage('');
            }
        }catch(error){
            console.log(error);
        }

    }
   /* const handleFileInputChange =(e) =>{
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    }
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };
    const handleSubmitFile = (e) => {
        e.preventDefault();
        /*const data =new FormData();
        data.append("title",title)
        data.append("description",description)
        data.append("photot",image)
//CreatePhotoField.current.value=""
await axios.post('http://localhost:3001/create-animal',data,{headers:{"Content-Type":"multipart/form-data"}})*/

      /*  if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            setErrMsg('something went wrong!');
        };
    };
    const uploadImage = async (base64EncodedImage) => {

       try {
        const config = {
                headers: {
                    'Content-Type': 'application/json' 
                }
            }
            const { data } = await axios.post('http://localhost:3001/api/users/upload',
                {
                    title,
                    description,
                    base64EncodedImage
                },
                config

            );
            localStorage.setItem('userInfo', JSON.stringify({ data: data }));
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
         
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };*/

    return(

        <div className='note'>
            
            
            <h1>Crea un recuerdo...</h1>
            <Form onSubmit={handleForm} className="form">
            <div className='contenidos'>
        </div>
            <div className='foto'>
            <input type="file" name="image" 
            //onChange={}
            value={fileInputState}
            className='form-input'/>
             <Button variant="primary" type="submit" className='btn-note'>
          Submit
        </Button><br/>
            </div>
      </Form>
      {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
      
            
            
        </div>
        
    )
}

export default Createnote;