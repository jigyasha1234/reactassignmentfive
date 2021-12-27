import React from 'react'
import { Card, Navbar, Container, Nav } from 'react-bootstrap'
import './Postview.css';

export default function Post(props) {
    return (
        <div>
            <Card style={{ width: '28rem' }} className='postcard'>
                <Card.Header>
                    <Navbar>
                        <Container>
                            <Navbar.Brand href="/">
                                <div>{props.about.name}</div>
                                <div>{props.about.location}</div>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text className='fontsizeofdot'>
                                    <a href="#login">...</a>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Card.Header>
                <Card.Img variant="top" src={props.about.PostImage} />
                <Card.Body>
                    <Navbar bg="light" expand="lg">
                        <Container fluid>

                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#action1">{props.about.likes} Likes</Nav.Link>


                                </Nav>
                                <span>{props.about.date}</span>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Card.Body>
                <Card.Footer className="text-muted">{props.about.description}</Card.Footer>
            </Card>
        </div>
    )
}
