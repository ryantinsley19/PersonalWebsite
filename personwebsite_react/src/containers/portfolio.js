import React, { Component } from "react";
import { Card, Container, CardDeck } from "react-bootstrap";
import "../components/common/common.css";
import MST from "../assets/images/mst.png";
import Parallon from "../assets/images/parallon.png";
import Berkshire from "../assets/images/berkshirehathaway.jpg";
import PageHeader from "../components/common/PageHeader";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testArray: [
        {
          image: Parallon,
          jobTitle: "Business Systems Analyst III",
          body:
            "Developed some stuff, made sure stuff didn't break, SQL'd, turned stuff off and on again",
          footer: "2015-2020",
        },
        {
          image: MST,
          jobTitle: "BS in Computer Science",
          footer: "2012-2015",
        },
        {
          image: Berkshire,
          jobTitle: "Technology Analyst Intern",
          footer: "5/2014-8/2014",
        },
      ],
    };
  }

  render() {
    const configData = this.state;
    return (
      <div className="portfolio">
        <PageHeader title="Portfolio" />
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
        <Card.Img
          className="card-block-image"
          variant="top"
          src={props.content.image}
        />
        <Card.Body>{props.content.jobTitle}</Card.Body>
        <Card.Footer>{props.content.footer}</Card.Footer>
      </Card.Body>
    </Card>
  );
}
