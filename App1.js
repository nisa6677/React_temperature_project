import React, { Component } from 'react'
import React, { Component } from 'react'
import Kelvin from "./Kelvin";
import fahrenheit from './fahrenheit';
import {Container,Row, Col, Button} from "reactstrap";

export default class App1 extends Component {
    state = {heat:0};
    heatFunction = () => {
        this.setState({ heat: this.state.heat +1});
    };
  render() {
      return(
          <Container>
              <Row>
                  <h3> Hava Sıcaklığı</h3>
                  <p> Şuan Sıcaklık:{this.state.heat}</p>
                  <sup>o</sup>C
              </Row>
              <Row>
                  <Col>
                  <Button onClick={()=> this.heatFunction()}>Sıcaklığı Arttır </Button>
                  </Col>
              </Row>
              <Row>
                  <Col md ="3">
                  <Kelvin title= "Kelvin" heat ={this.state.heat}/>
                  </Col>
              </Row>
              <Row>
                  <Col md = "3">
                   <fahrenheit title = "Fahrenheit" heat= {this.state.heat}/> 
                  </Col>
              </Row>
          </Container>
      )
    
  }
}

