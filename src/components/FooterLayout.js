import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import{ Container, Row, Col} from 'react-bootstrap';


const FooterLayout = ()=>{
   
    const dateNow = new Date().getFullYear()
    return(
        <>
        <div id="footer">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={12}><p className="footer-p">&copy; {dateNow} Created with <FontAwesomeIcon icon={faHeart} size="sm"/> by Nives</p></Col> 
                </Row>  
            
            </Container>
        </div>
        </>
    )
}

export default FooterLayout;
