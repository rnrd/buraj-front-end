import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
  Container,
  Card,
  CardTitle,
} from "reactstrap";
import "../css/BasitKurp.css";
import {useState, useEffect} from "react";
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {getBasitKurpDataFromApi} from "../redux/actions/Actions";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import BasitKurpChart from "./BasitKurpChart";


function BasitKurp(props) {

const [R,setR]=useState(0.0);
const [Dever,setDever]=useState(0.0);
const [Lgp,setLgp]=useState(0.0);
const [Lk,setLk]=useState(0.0);
const [Lcp,setLcp]=useState(0.0);
const [X,setx]=useState(0.0);
const [Yon,setYon]=useState(false);
const [buttonState,setButtonState]=useState(false);

const postData = {
  R : parseFloat(R),
  Dever : parseFloat(Dever),
  Lgp : parseFloat(Lgp),
  Lk : parseFloat(Lk),
  Lcp : parseFloat(Lcp),
  X : parseFloat(X),
  Yon : Yon,
};


const basitKurpDispatch=useDispatch();

const getResult=(data)=>{

 basitKurpDispatch(getBasitKurpDataFromApi(data))
}


const result=useSelector(state=>state.basitKurpReducer,shallowEqual);

  const selectDirection=(direction)=> 
  {
    if(direction==="Sağ Kurp")
    {
      setYon(true);
    }
    else
    {
      setYon(false);
    }
  }

  console.log(result.Status)

  
  const clickDelay = (ms) => new Promise((res) => setTimeout(res, ms));
  const buttonClick = async () => {
    await clickDelay(200);
    if (!buttonState) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  };
  
  const alertDelay = ms => new Promise(res => setTimeout(res, ms));

  const processAlert = async (status) => {
    await alertDelay(200);
     if (status === 200) {
       return  alertify.success('İstek başarılı.');
     } else if (status !== null & status !== 200 ){
       return  alertify.error('İstek başarısız.');
     }
   };

  
  useEffect(() => {
    
    console.log("useeffect");
    processAlert(result.Status);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[buttonState])


  return (
    <div>
      <Container className="basitkurp-container-1">
        <Row>
          <Col sm="3" className="card-container offset-2">
            <Card className="basitkurp-card">
              <CardTitle className="basitkurp-cardtitle" tag="h5">
                FLEŞ
              </CardTitle>
              <span className="basitkurp-span-card">
                <h2 className="basitkurp-h2-card">{result.Fles}</h2>
              </span>
            </Card>
          </Col>
          <Col sm="3" className="card-container offset-2">
            <Card className="basitkurp-card">
              <CardTitle className="basitkurp-cardtitle" tag="h5">
                DEVER A
              </CardTitle>
              <span className="basitkurp-span-card">
                <h2 className="basitkurp-h2-card">{result.Dever_A}</h2>
              </span>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="3" className="card-container offset-2">
            <Card className="basitkurp-card">
              <CardTitle className="basitkurp-cardtitle" tag="h5">
                DEVER B
              </CardTitle>
              <span className="basitkurp-span-card">
                <h2 className="basitkurp-h2-card">{result.Dever_B}</h2>
              </span>
            </Card>
          </Col>
          <Col sm="3" className="card-container offset-2">
            <Card className="basitkurp-card">
              <CardTitle className="basitkurp-cardtitle" tag="h5">
                İNDİRME
              </CardTitle>
              <span className="basitkurp-span-card">
                <h2 className="basitkurp-h2-card">{result.Indirme}</h2>
              </span>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="basitkurp-container-2">
        <Form>
          <Row>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="R" className="label">
                  Yarıçap
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="R"
                  id="R"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setR(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="Dever" className="label">
                  Dever
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="Dever"
                  id="Dever"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setDever(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="Lgp" className="label">
                  Giriş Parabol Boyu
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="Lgp"
                  id="Lgp"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setLgp(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="Lk" className="label">
                  Developman Boyu
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="Lk"
                  id="Lk"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setLk(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="Lcp" className="label">
                  Çıkış Parabol Boyu
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="Lcp"
                  id="Lcp"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setLcp(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="x" className="label">
                  Konum
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="x"
                  id="x"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setx(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="8" className="offset-2 input-col">
              <FormGroup>
                <Label for="Yon" className="label">
                  Kurp Yönü
                </Label>
                <Input
                  type="select"
                  name="Yon"
                  id="Yon"
                  onChange={(e) => {
                    e.preventDefault();
                    selectDirection(e.target.value);
                  }}
                >
                  <option>Sol Kurp</option>
                  <option>Sağ Kurp</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row xs="2" className="offset-4">
            <Button
              className="default input-button"
              color="success"
              size="lg"
              block
              onClick={(e) => {
                //e.preventDefault();
                getResult(postData);
                buttonClick();                       
              }}
            >
              Gönder
            </Button>
          </Row>
          <Row>
            <Col sm="8" className=" input-alert offset-4">
              <FormText color="muted">
                Yarıçap için 200 metre ve üzeri değer giriniz.
              </FormText>
            </Col>
          </Row>
          <Row>
            <Col sm="8" className=" input-alert offset-4">
              <FormText color="muted">
                Parabol boyları ve developman boyu için 11 metre ve üzeri bir değer giriniz.
              </FormText>
            </Col>
          </Row>
        </Form>
      </Container>
      <BasitKurpChart postData={postData}/>
    </div>
  );
}

export default BasitKurp;
