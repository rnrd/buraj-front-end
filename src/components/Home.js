import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { FaTemperatureLow } from 'react-icons/fa';
//import { FiMonitor } from 'react-icons/fi';
import "../css/Home.css";
//import { Button } from "reactstrap";


class Home extends Component {
    
  //Home will not include any states.
  //This will be located in Homepage component.

  render() {
    return (
      <div>
        <section className="section-1 cover">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                <h1 className="home-h1">
                  DEMİRYOLU REFAH VE UYGARLIK YOLUDUR.
                </h1>
                <p className="home-p1">Mustafa Kemal ATATÜRK</p>
              </div>
            </div>
          </div>
        </section>

       
      </div>
    );
  }
}

export default Home;
