import React from "react";
import { Button, Card, Row, Col, CardTitle, Modal } from "react-materialize";

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      showPower: false
    };

    this.modalHandler = this.modalHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  modalHandler() {
    this.setState({
      modal: true
    });
  }

  clickHandler() {
    this.setState({
      showPower: !this.state.showPower
    });
  }

  render() {
    let power = "Hidden";
    if (this.state.showPower) {
      power = this.props.power;
    }

    return (
      <div>
        <Col l={3} m={6} s={12} role="alert">
          <Card
            header={
              <CardTitle image={this.props.img}>
                {this.props.name}
              </CardTitle>
            }
            className="grey hero-card"
            textClassName="white-text"
            tabIndex="0"
            onClick={this.clickHandler}
          >
            Power: {power}
          </Card>
        </Col>
      </div>
    );
  }
}

export default Hero;
