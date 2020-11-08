import React, { Component } from "react";
import { Card, Container, CardDeck } from "react-bootstrap";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testArray: [
        { title: "titleTest1", body: "testBody1", footer: "testFooter1" },
        { title: "titleTest1", body: "testBody1", footer: "testFooter1" },
        {
          title: "title1",
          body: "body 1 info blah blah blah",
          footer: "footer1",
        },
        {
          title: "title2",
          body: "body 2 info blah blah blah",
          footer: "footer2",
        },
        {
          title: "title3",
          body: "body 3 info blah blah blah",
          footer: "footer3",
        },
      ],
    };
  }

  render() {
    const configData = this.state;
    return (
      <div className="portfolio">
        <div className="component-body">
          <Container>
            <CardDeck>
              {configData.testArray.map((item) => (
                <CardBox content={item} />
              ))}
            </CardDeck>
          </Container>
        </div>
      </div>
    );
  }
}

function CardBox(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.content.title}</Card.Title>
        <Card.Body>{props.content.body}</Card.Body>
        <Card.Footer>{props.content.footer}</Card.Footer>
      </Card.Body>
    </Card>
  );
}
