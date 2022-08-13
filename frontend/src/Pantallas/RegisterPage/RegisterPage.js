import { useState } from "react";
import MainScreen from "../../components/MainScreen";
import {Button, Form, Row, Col} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import Mynotes from '../MyNotes/MyNotes';

const RegisterPage = () =>{
    const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const navigate=useNavigate();
    const submitHandler = async (e) =>{
        e.preventDefault();
        if(password !== confirmpassword){
            setMessage('Contraseñas diferentes');
        }else{
            setMessage(null)
            try{
                const config={
                    headers:{
                        "Content-type":"application/json"
                    },
                };
                setLoading(true);
                const {data} =await axios.post('https://backend-photos.herokuapp.com/api/users/register',
                {name,email,password,pic}, 
                config
                );
                console.log(data);
                setLoading(false);
               localStorage.setItem('userInfo',JSON.stringify(data));
                navigate('/login');
            
              }catch(error){
                setError(error.response.data.message)
        setLoading(false);
            }
        }
    }

    return(
        <MainScreen title="REGISTER">
        <div className="loginContainer">
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
    {loading && <Loading />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group >
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                onChange={(e) => setPic(e.target.files)}
                id="custom-file"
                type="file"
                label="Upload Profile Picture"
                accept="imaje/*"
              />
            </Form.Group>

            {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <a href='/'>
          <Button variant="primary" type="submit">
              Register
            </Button>
          </a>
          {/*onClick ={() =>{
                localStorage.removeItem("userInfo");
                navigate('/')              }} */}
            
          </Form>
          <Row className="py-3">
            <Col>
              Have an Account ? <Link to="/login">Login</Link>
            </Col>
          </Row>
        </div>
      </MainScreen>

        
    )
}
export default RegisterPage;