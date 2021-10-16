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
import {getSepetKurpDataFromApi} from "../redux/actions/Actions";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import SepetKurpChart from "./SepetKurpChart";


function SepetKurp(props) {

const sepetKurpDispatch=useDispatch();

const getResult=(data)=>{
  
  console.log("getResult");
  console.log(data);
  sepetKurpDispatch(getSepetKurpDataFromApi(data))
}

/*const stringToDouble=(array)=>{
  let arr=array;
  for(let i=0; i<array.length; i++){
      arr[i]=parseFloat(array[i]);
  }
  return arr;
}*/

const [R,setR]=useState([0.0, 0.0, 0.0, 0.0, 0.0]);
const [Dever,setDever]=useState([0.0, 0.0, 0.0, 0.0, 0.0]);
const [L,setL]=useState([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0])
const [X,setx]=useState(0.0);
const [Yon,setYon]=useState(false);
const [buttonState,setButtonState]=useState(false);

const postData = {
  R : R,
  Dever : Dever,
  L : L,
  X : parseFloat(X),
  Yon : Yon,
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

console.log(postData);



const result=useSelector(state=>state.sepetKurpReducer,shallowEqual);

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

  console.log(result)

  const alertDelay = ms => new Promise(res => setTimeout(res, ms));
  
  const processAlert =async (status) => {
    await alertDelay(200);
    console.log("alert status : "+status);
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
            <Col sm="2" className="input-col offset-1">
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
                    setR(array=>{
                        array[0]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
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
                    //e.preventDefault();
                    setDever(array=>{
                        array[0]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
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
                    setR(array=>{
                        array[1]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
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
                    setDever(array=>{
                        array[1]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
          <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="R3" className="label">
                  3.Yarıçap
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="R3"
                  id="R3"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setR(array=>{
                        array[2]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="Dever3" className="label">
                  3.Dever
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="Dever3"
                  id="Dever3"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setDever(array=>{
                        array[2]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="R4" className="label">
                  4.Yarıçap
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="R4"
                  id="R4"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setR(array=>{
                        array[3]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="Dever4" className="label">
                  4.Dever
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="Dever4"
                  id="Dever4"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setDever(array=>{
                        array[3]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="R5" className="label">
                  5.Yarıçap
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="R5"
                  id="R5"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setR(array=>{
                        array[4]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="Dever5" className="label">
                  5.Dever
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="Dever5"
                  id="Dever5"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setDever(array=>{
                        array[4]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="L1" className="label">
                  L1
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L1"
                  id="L1"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL(array=>{
                        array[0]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="L2" className="label">
                  L2
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L2"
                  id="L2"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL(array=>{
                        array[1]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
          <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="L3" className="label">
                  L3
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L3"
                  id="L3"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL(array=>{
                        array[2]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="L4" className="label">
                  L4
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L4"
                  id="L4"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL(array=>{
                        array[3]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="L5" className="label">
                  L5
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L5"
                  id="L5"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL(array=>{
                        array[4]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="L6" className="label">
                  L6
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L6"
                  id="L6"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL(array=>{
                        array[5]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
          <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="L7" className="label">
                  L7
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L7"
                  id="L7"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL(array=>{
                        array[6]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="L8" className="label">
                  L8
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L8"
                  id="L8"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL(array=>{
                        array[7]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="L9" className="label">
                  L9
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L9"
                  id="L9"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL(array=>{
                        array[8]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="L10" className="label">
                  L10
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L10"
                  id="L10"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL(array=>{
                        array[9]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
          <Col sm="2" className="input-col offset-1">
              <FormGroup className="formgroup">
                <Label for="L11" className="label">
                  L11
                </Label>
                <Input
                  className="input"
                  type="text"
                  name="L11"
                  id="L11"
                  placeholder="metre"
                  onChange={(e) => {
                    e.preventDefault();
                    setL(array=>{
                        array[10]=parseFloat(e.target.value);
                        return array;
                    });
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="2" className="input-col offset-1">
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
            <Col sm="5" className="offset-1 input-col">
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
                e.preventDefault();
                getResult(postData);
                buttonClick();
                //processAlert(result.Status); 
                            
              }}
            >
              Gönder
            </Button>
          </Row>
          <Row>
            <Col sm="8" className=" input-alert offset-4">
              <FormText color="muted">
                 Yarıçaplar için 200 metre ve üzeri bir değer giriniz.
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
      <SepetKurpChart postData={postData}/>
    </div>
  );
}

export default SepetKurp;
