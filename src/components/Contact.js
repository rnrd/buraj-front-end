import React from 'react'
import {Container,Col,Row} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Contact.css"

//this component will always be seen on the page and does not have any states
function Contact() {
    return (
      <div>
        <section className="section-contact">
          <Container className="container-contact justify-content-center">
            <Row className=" container-row justify-content-center">
              <Col sm="4" className="justify-content-center">
                <h5 className="contact-h5 text-center">İLETİŞİM</h5>
                <p className="contact-p2 text-center">
                  TCDD 3. Bölge Müdürlüğü
                </p>
                <p className="contact-p2 text-center">
                  Adres: Mimar Sinan, Atatürk Cd. 121 B, 35220 Konak/İzmir
                </p>
                <p className="contact-p2 text-center">Telefon: (0232) 464 31 31</p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
}

export default Contact;


