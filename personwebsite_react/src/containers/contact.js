import React, { Component } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { LinkedInUrl, GitHubUrl } from "../utils/constants";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="component-body">
          <Container>
            <Row className="justify-content-md-center">
              <Card style={{ width: "50rem" }}>
                <div className="card-body">
                  <div className="card-header">Contact Info</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name: Ryan Tinsley</li>
                    <li className="list-group-item">
                      Email: RyanTinsley19@gmail.com
                    </li>
                    <li className="list-group-item">
                      LinkedIn:{" "}
                      <a href={LinkedInUrl}>
                        www.linkedin.com/in/ryan-tinsley/
                      </a>
                    </li>
                    <li className="list-group-item">
                      GitHub:{" "}
                      <a href={GitHubUrl}>https://github.com/ryantinsley19/</a>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </Card>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
