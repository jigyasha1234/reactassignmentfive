import React from 'react'
import './Postview.css';
// import components
import Post from './Post';
import data from './Mock-data/data.json'
import { Card, Navbar, Container} from "react-bootstrap"

export default function Postview() {
    return (
        <div className='backgroungofpost'>
            <Card className="text-center ">
                <Card.Header className='leftalign'>
                <Navbar>
  <Container className='instaclonestyle'>
    <Navbar.Brand href="#home">Instaclone</Navbar.Brand>
  </Container>
</Navbar>
                </Card.Header>
                
                <Card.Body>
                {data.user.map((ele) => (
                    <Post about={ele} />

                ))}
                    
                </Card.Body>                
            </Card>
        </div>
    );
}
