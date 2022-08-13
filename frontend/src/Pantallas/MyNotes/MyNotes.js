import MainScreen from '../../components/MainScreen'; 
import {Link} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
const MyNotes =() =>{
return(
    <div>
    <MainScreen title='Bienvenido '>
        <Link to='/mynotes/create'>
            <Button style={{marginLeft:10, marginBottom:6}} size="lg">
                Listo para escribir?
            </Button>
            <Card>
            <Card.Header style={{display:'flex'}}>
            <span
                    // onClick={() => ModelShow(note)}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                 />
                <div>
                    <Button>View  </Button>
                </div>
            </Card.Header>
            </Card>
            


        </Link>

    </MainScreen>
    
    </div>
)
}
export default MyNotes;