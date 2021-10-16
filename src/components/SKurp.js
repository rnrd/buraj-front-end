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
import {getSKurpDataFromApi} from "../redux/actions/Actions";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import SKurpChart from "./SKurpChart";


function SKurp(props) {

    console.log(props);

const [R1,setR1]=useState(0.0);
const [R2,setR2]=useState(0.0);
const [Dever1,setDever1]=useState(0.0);
const [Dever2,setDever2]=useState(0.0);
const [L1gp,setL1gp]=useState(0.0);
const [L1k,setL1k]=useState(0.0);
const [L1cp,setL1cp]=useState(0.0);
const [L2gp,setL2gp]=useState(0.0);
const [L2k,setL2k]=useState(0.0);
const [L2cp,setL2cp]=useState(0.0);
const [X,setx]=useState(0.0);
const [Yon_1,setYon_1]=useState(false);
const [Yon_2,setYon_2]=useState(false);
const [buttonState,setButtonState]=useState(false);


const postData = {
  R1 : parseFloat(R1),
  R2 : parseFloat(R2),
  Dever1 : parseFloat(Dever1),
  Dever2 : parseFloat(Dever2),
  L1gp : parseFloat(L1gp),
  L1k : parseFloat(L1k),
  L1cp : parseFloat(L1cp),
  L2gp : parseFloat(L2gp),
  L2k : parseFloat(L2k),
  L2cp : parseFloat(L2cp),
  X : parseFloat(X),
  Yon_1 : Yon_1,
  Yon_2 : Yon_2
};

const clickDelay = ms => new Promise(res => setTimeout(res, ms));
const buttonClick=async ()=>{
  await clickDelay(200);
  if(!buttonState){
    setButtonState(true)
  }
  else{
    setButtonState(false)
  }
}


const basitKurpDispatch=useDispatch();


const getResult=(data)=>{

 basitKurpDispatch(getSKurpDataFromApi(data))
}

const result=useSelector(state=>state.sKurpReducer,shallowEqual);


  const selectDirection_1=(direction)=> 
  {
    if(direction==="Sağ Kurp")
    {
      setYon_1(true);
    }
    else
    {
      setYon_1(false);
    }
  }

  const selectDirection_2=(direction)=> 
  {
    if(direction==="Sağ Kurp")
    {
      setYon_2(true);
    }
    else
    {
      setYon_2(false);
    }
  }

  console.log(result.Status)

  const alertDelay = ms => new Promise(res => setTimeout(res, ms));

  const processAlert =async (status) => {

    await alertDelay(200);
     if (status === 200) {
       return  alertify.success('İstek başarılı.');
     } else if (status !== null & status !== 200 ){
       return  alertify.error('İstek başarısız.');
     }
   };

  

  
  useEffect(() => {
    console.log("useeffect");
    /*setTimeout(async () => {
      await alertDelay(500)
      processAlert(result.Status);
    }, 500); */
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
                <Label for="R1" className="label">
                  1.Yarıçap
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="R1"
                  id="R1"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setR1(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="Dever1" className="label">
                  1.Dever
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="Dever1"
                  id="Dever1"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setDever1(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="R2" className="label">
                  2.Yarıçap
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="R2"
                  id="R2"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setR2(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="Dever2" className="label">
                  2.Dever
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="Dever2"
                  id="Dever2"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setDever2(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="L1gp" className="label">
                  1.Giriş Parabol Boyu
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L1gp"
                  id="L1gp"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL1gp(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="L1k" className="label">
                  1.Developman Boyu
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L1k"
                  id="L1k"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL1k(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
          <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="L1cp" className="label">
                  1.Çıkış Parabol Boyu
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L1cp"
                  id="L1cp"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL1cp(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="L2gp" className="label">
                  2.Giriş Parabol Boyu
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L2gp"
                  id="L2gp"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL2gp(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="L2k" className="label">
                  2.Developman Boyu
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L2k"
                  id="L2k"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL2k(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="3" className="input-col offset-2">
              <FormGroup className="formgroup">
                <Label for="L2cp" className="label">
                  2.Çıkış Parabol Boyu
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L2cp"
                  id="L2cp"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL2cp(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="8" className="input-col offset-2">
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
                <Label for="Yon_1" className="label">
                  1.Kurp Yönü
                </Label>
                <Input
                  type="select"
                  name="Yon_1"
                  id="Yon_1"
                  onChange={(e) => {
                    e.preventDefault();
                    selectDirection_1(e.target.value);
                  }}
                >
                  <option>Sol Kurp</option>
                  <option>Sağ Kurp</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="8" className="offset-2 input-col">
              <FormGroup>
                <Label for="Yon_2" className="label">
                  2.Kurp Yönü
                </Label>
                <Input
                  type="select"
                  name="Yon_2"
                  id="Yon_2"
                  onChange={(e) => {
                    e.preventDefault();
                    selectDirection_2(e.target.value);
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
                buttonClick()                          
              }}
            >
              Gönder
            </Button>
          </Row>
          <Row>
            <Col sm="8" className=" input-alert offset-4">
              <FormText color="muted">
                Yarıçaplar için 200 metre ve üzeri değer giriniz.
              </FormText>
            </Col>
          </Row>
          <Row>
            <Col sm="8" className=" input-alert offset-4">
              <FormText color="muted">
                Parabol ve developman boyları için 11 metre ve üzeri bir değer giriniz.
              </FormText>
            </Col>
          </Row>
        </Form>
      </Container>
      <SKurpChart postData={postData}/>
    </div>
  );
}

export default SKurp;
