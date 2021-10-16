import React from 'react'
import {useState, useEffect} from "react";
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {getSKurpChartDataFromApi} from "../redux/actions/Actions";
import { Line } from 'react-chartjs-2';
import {Container, Row, Button} from 'reactstrap';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import "../css/Chart.css"

function SKurpChart(props) {

    const postData = {
        R1 : props.postData.R1,
        R2 : props.postData.R2,
        Dever1 : props.postData.Dever1,
        Dever2 : props.postData.Dever2,
        L1gp : props.postData.L1gp,
        L1k : props.postData.L1k,
        L1cp : props.postData.L1cp,
        L2gp : props.postData.L2gp,
        L2k : props.postData.L2k,
        L2cp : props.postData.L2cp,
        Yon_1 : props.postData.Yon_1,
        Yon_2 : props.postData.Yon_2
    };

    


    const [buttonState,setButtonState]=useState(false);

    const sKurpChartDispatch=useDispatch();

    const getResult=(data)=>{

        //console.log(data);
        sKurpChartDispatch(getSKurpChartDataFromApi(data))
    }

    const result=useSelector(state=>state.sKurpChartReducer,shallowEqual);
    console.log(result);

    var kurpBoyu=props.postData.L1gp+props.postData.L1k+props.postData.L1cp+props.postData.L2gp+props.postData.L2k+props.postData.L2cp;
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
          <Line data={chartState} options={chartOptions} />
        </Container>
        <Container>
          <Row xs="2" className="offset-4">
            <Button
              className="default input-button"
              outline
              color="primary"
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
    );
}

export default SKurpChart;
