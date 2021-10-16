import React from "react";
import { UncontrolledCarousel, Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Project.css";

const items = [
  {
    src: "/images/urban-railway.jpg",
    altText: "",
    caption: "",
    header: "Güvenli",
    key: "1",
  },
  {
    src: "/images/sustainability.jpg",
    altText: "Slide 2",
    caption: "",
    header: "Sürdürülebilir",
    key: "2",
  },
  {
    src: "/images/cloud-railway.jpg",
    altText: "Slide 3",
    caption: "",
    header: "Dijital",
    key: "3",
  },
];

//Project will not include any states.
//This will be located in Homepage component.

const Project = () => (
  <div className="project-div">
    <Row className="project-row">
      <Col md="8" className="mx-auto">
        <UncontrolledCarousel className="project-carousel" items={items} />
      </Col>
    </Row>
    <Container className="project-container">
      <Row>
        <Col sm="10" className="offset-1">
          <p className="project-p text-justify">
            Daha sürdürülebilir, daha güvenli, daha dijital bir demiryolu
            altyapısı için yola çıktık. Yenilenen ve dijitalleşen dünyada yeni endüstriyel devrimin
            getirdiği yenilikleri, ülkemizin demiryolu alt yapısında var olan
            zorlu sorunların çözümünde uyguluyoruz.
          </p>
          <p className="project-p text-justify">
            Demiryolu makinalarının verimliğini arttırarak dijital dünyaya
            entegre ediyoruz. Türkiye Cumhuriyeti Devlet Demiryollarını yeni
            endüstriyel devrime taşıyoruz.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Project;
