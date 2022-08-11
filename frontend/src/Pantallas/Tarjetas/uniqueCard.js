import { Row,Col, Card,Button, Form } from 'react-bootstrap';
import { useRef, useState } from "react";
import axios from 'axios';
import './note.css';

const Upload =()=>{

    const image={image,title,description}
    return(
        <div>
    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
               {image.title}
              </Card.Text>
              <Card.Title>Description</Card.Title>
              <Card.Text>
               {image.description}
              </Card.Text>
              <a href='/'>
          <Button variant="primary" type="submit">
              Delete
            </Button>
          </a>
            </Card.Body>
          </Card>
        </Col>
    </Row>
        </div>
    );
};

export default Upload;