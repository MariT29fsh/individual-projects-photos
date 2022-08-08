import {Row,Container, Button} from 'react-bootstrap';
import  './LandingPage.css';

const LandingPage =() =>{
    /*useEffect(() =>{
        const userInfo=localStorage.getItem("userInfo");
        if(userInfo){
            history.push("/mynotes")
        }
    },[history]);*/
    return(
        <div className='main'> 
        
        <Container>
            <Row>
                <div className='intro-text'>
                    <div>
                    <h1 className='title'> Bienvenido a mi Libro de Recuerdos</h1>
                    <p className='subtitle'>Para comenzar REGISTRESE O INGRESE</p>
                    </div>
                    <div className='buttonContainer'>
                        <a href='/login'>
                            <Button className='landingbutton'>Ingresar</Button>
                        </a>
                        <a href='/register'>
                            <Button  className='landingbutton'>Registrarse</Button>
                        </a>
                    </div>
                    
                </div>
            </Row>
            </Container>        
            
            </div>
    )
};
export default LandingPage;