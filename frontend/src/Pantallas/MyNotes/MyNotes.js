import MainScreen from '../../components/MainScreen'; 
import {Link} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
const MyNotes =() =>{
return(
    <div>
    <MainScreen title='Bienvenido '>
        <Link to='/create'>
            <Button style={{marginLeft:10, marginBottom:6}} size="lg">
                Create New Note
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
                    <Button>Edit  </Button>
                    <Button variant='danger' className='mx-2'> Delete  </Button>
                </div>
            </Card.Header>
            </Card>
            


        </Link>

    </MainScreen>
    
    </div>
)
}
export default MyNotes;