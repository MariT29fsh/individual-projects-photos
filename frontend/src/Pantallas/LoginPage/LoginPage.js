import { useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const LoginPage = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate=useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(email, password);
        //dispatch(login(email, password));
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            setLoading(true);
            const { data } = await axios.post('https://animals-photos-list.herokuapp.com/api/users/login',
                {
                    email,
                    password,
                },
                config

            );
            console.log(data);
            setLoading(false);
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/mybook');
        } catch (error) {
            setLoading(false);
            setError(error.response.data.message)
            
        }
    };


    return (
        <div className="boxlogin">
            <MainScreen title="LOGIN">

<div className="loginContainer">
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
    {loading && <Loading />}
    <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>

    </Form>
    <Row className="py-3">
        <Col>
            New Customer ? <Link to="/register">Register Here</Link>
        </Col>
    </Row>
</div>

</MainScreen>
        </div>

    )
}
export default LoginPage;