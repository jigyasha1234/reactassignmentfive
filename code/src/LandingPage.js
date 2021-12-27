import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'


export default function LandingPage() {
    return (
        <div>
            <Container>
                <Card>
                    <Card.Img className='inlinetoimg' style={{ width: '58rem' }} variant="top" src="https://cimg2.ibsrv.net/cimg/www.hdforums.com/1600x900_85-1/738/BigWish-List-Must-Have-H-D-Motorcycles-Past-and-Present-008-405738.jpg" />
                    <Card.Body>
                        <Card className='inlinetotext'>
                            <div className="hero-image">
                                <div className="hero-text">
                                    <h1>10X Academy 04</h1>
                                    
                                        <Link to="/postview">Enter</Link>
                                    
                                </div>
                            </div>
                        </Card>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
