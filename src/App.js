import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        option: "",
        number: [
          {
            number1: "",
            number2: ""
          }
        ]
      }
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const number1 = this.number1.value;
    const number2 = this.number2.value;
    const numbers = { number1: number1, number2: number2 };
    const data = [...this.state.data, numbers];

    this.setState({
      data: data
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Card className="mt-3">
            <Card.Body>
              <Form onSubmit={this.handleOnSubmit}>
                <Form.Group>
                  <Form.Control
                    type="number"
                    name="number1"
                    ref={input => (this.number1 = input)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type="number"
                    name="number2"
                    ref={input => (this.number2 = input)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-6 colmd-6 col-sm-12">
          <div className="text-center mt-3">
            <h2>Result History</h2>
            {
              // this.state.data.map((number, index) =>
              //   <p key={ index }>
              //     { (+(number.number1)) + (+(number.number2)) }
              //   </p>
              // )
            }
          </div>
        </div>
      </div>
    );
  }
}
