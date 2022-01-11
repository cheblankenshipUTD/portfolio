import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import { Row, Col, Card, Button, Container, Tabs, Tab } from 'react-bootstrap';

const Project = () => {

    const projects = [
        {
            title: "Maze Game",
            description: "Maze game implemented in MIPS Assembly",
            url: "https://github.com/cheblankenshipUTD/"
        },
        {
            title: "Location Share App",
            description: "Share real-time location on a google map",
            url: "https://github.com/cheblankenshipUTD/Location-Share-App"
        },
        {
            title: "Face Detect App",
            description: "Detect face and eye blinks using OpenCV",
            url: "https://github.com/cheblankenshipUTD/Eye-Blink-Analysis"
        }
    ]


    return (
        <div>
            <Container style={{"height": "70vh", "margin-top": "10vh"}}>
                <Row>
                {projects.map(project => {
                    return (
                    <Col xs="3" style={{"margin": "auto"}}>
                        <div>
                        <Card>
                        <Card.Img variant="top" src="./images/create-project.jpeg" />
                        <Card.Body>
                            <Card.Title style={{"font-weight": "bold"}}>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <Button variant="dark" href={project.url} target="_blank" style={{"color": "white"}}>Github</Button>
                        </Card.Body>
                        </Card>
                        </div>
                    </Col>
                    )
                })}
                </Row>
            </Container>
    
        </div>
    )
}


export default Project;
