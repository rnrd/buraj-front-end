import React from 'react'
import {useState, useEffect} from "react";
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {getParabolsuzKurpChartDataFromApi} from "../redux/actions/Actions";
import { Line } from 'react-chartjs-2';
import {Container, Row, Button} from 'reactstrap';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import "../css/Chart.css"

function ParabolsuzKurpChart(props) {

    console.log(props);

    const postData = {
        R : props.postData.R,
        Dever : props.postData.Dever,
        Lk : props.postData.Lk,
        Yon : props.postData.Yon
      };

    console.log(postData);

    const [buttonState,setButtonState]=useState(false);

    const parabolsuzKurpChartDispatch=useDispatch();

    const getResult=(data)=>{

        //console.log(data);
        parabolsuzKurpChartDispatch(getParabolsuzKurpChartDataFromApi(data))
    }

    const result=useSelector(state=>state.parabolsuzKurpChartReducer,shallowEqual);
    console.log(result);

    var kurpBoyu=props.postData.Lk;
    var chartFlesData=result.ChartData;
    var chartLengthData=[];

    const chartAxisX=(kurpBoyu)=>{
    
        if(kurpBoyu!==0){
            for(let i=0; i<=(kurpBoyu+16);i++){
                chartLengthData.push(i);
            }   
        }
        
        return chartLengthData;
    }

    
    var chartState={
        labels: chartAxisX(kurpBoyu),
        datasets: [
          {
            label: 'Kurp Fleş Grafiği',
            fill: false,
            lineTension: 0.5,
            borderColor: "black",
            borderDash: [1, 1],
            backgroundColor: "black",
            borderCapStyle:"butt",
            borderJoinStyle:"bevel",
            borderWidth: 2,
            pointStyle: "circle",
            pointBackgroundColor: "black",
            pointBorderColor: "black",
            pointHoverBackgroundColor: "red",
            pointHoverBorderColor: "red",
            data: chartFlesData
          }
        ]
      };

    //now we will define options of chart(graph) outside
    var chartOptions={
        title:{
          display:true,
          text:'Kurp Fleşi',
          fontSize:20
        },
        legend:{
          display:true,
          position:'top'
        }
      }

      const clickDelay = (ms) => new Promise((res) => setTimeout(res, ms));
      const buttonClick = async () => {
        await clickDelay(200);
        if (!buttonState) {
          setButtonState(true);
        } else {
          setButtonState(false);
        }
      };

  const alertDelay = (ms) => new Promise((res) => setTimeout(res, ms));

  const processAlert = async (status) => {
    await alertDelay(200);
    if (status === 200) {
      return alertify.success("İstek başarılı.");
    } else if ((status !== null) & (status !== 200)) {
      return alertify.error("İstek başarısız.");
    }
  };

  useEffect(() => {
  
    console.log("useeffect");
    processAlert(result.ChartStatus);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[buttonState])


    return (
        <div>
            <Container className="Chart-container">
                <Line
                data={chartState}
                options={chartOptions}
                />
            </Container>
            <Container>
            <Row xs="2" className="offset-4">
            <Button
              className="default input-button"
              outline color="primary"
              size="lg"
              block
              onClick={(e) => {
                //e.preventDefault();
                getResult(postData);
                buttonClick();                       
              }}
            >
              Grafiği Getir
            </Button>
          </Row>
            </Container>
        </div>
    )
}

export default ParabolsuzKurpChart;
