import React, {useState} from 'react';
import{Card} from 'react-bootstrap';
import{Container, Row, Col} from 'react-bootstrap';
import aboutPic from '../pics/one.jpg';
import FooterLayout from './FooterLayout';

const initial_bio = 'this is some motherfucking bio that i just made up to you know, have something to work with'
let nameDesign = '<Nameere Olive Nives />';

const AboutLayout = ()=>{
    const [bio, setBio] = useState(initial_bio);

    return(
        <>
            <div className="container-div">
                <Container>
                    <Row>
                        <Col md={6} className="biography">
                            <div><h2 className="titles">{nameDesign}</h2></div>
                            <div className="bio-div">
                                <p className="bio-paragraph">{bio}</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Card className="about-card">
                                <Card.Img src={aboutPic} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterLayout/>
       </>
    )
}
export default AboutLayout