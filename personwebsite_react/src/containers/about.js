import React, {Component} from "react";
import { Card, Container, Row, Image } from "react-bootstrap";
import '../components/common/common.css'
import SelfPic from "../assets/images/selfShotTemp.jpg";

export default class About extends Component{
    render(){
        return(
            <div className="about">
                <div className="component-body">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Card style={{width: '30rem'}}>
                                <div className="card-body">
                                    <h3 className="card-header">Amount Me</h3>
                                    <Card.Img className="card-image" variant="top"src={SelfPic}/>
                                    <p>Mama, just killed a man
                                        Put a gun against his head, pulled my trigger, now he's dead
                                        Mama, life had just begun
                                        But now I've gone and thrown it all away
                                        Mama, ooh, didn't mean to make you cry
                                        If I'm not back again this time tomorrow
                                        Carry on, carry on as if nothing really matters</p>
                                </div>
                            </Card>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
