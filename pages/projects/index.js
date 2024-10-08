import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import { Row, Col, Card, Button, Container, Tabs, Tab } from 'react-bootstrap';

const Project = () => {

    const projects = [
        {
            title: "Maze Game",
            description: "Maze game implemented in MIPS Assembly",
            url: "https://github.com/cheblankenshipUTD/maze-game"
        },
        {
            title: "Library database system",
            description: "UT Dallas Database Systems Group Project",
            url: "https://github.com/cheblankenshipUTD/CS-4347-Database-Systems"
        },
        {
            title: "Portfolio",
            description: "React/Next.js portfolio",
            url: "https://github.com/cheblankenshipUTD/portfolio"
        }
    ]


    return (
        <div>
            <Container style={{"height": "70vh", "margin-top": "10vh"}}>
            <Row>
            {projects.map(project => (
                <Col xs="12" sm="6" md="4" lg="3" style={{ margin: "auto" }}>
                <div>
                    <Card>
                    <Card.Img variant="top" src="./images/create-project.jpeg" />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "bold" }}>{project.title}</Card.Title>
                        <Card.Text style={{ margin: "0" }}>{project.description}</Card.Text>
                        <Button
                        variant="dark"
                        href={project.url}
                        target="_blank"
                        style={{ color: "white", margin: "0", marginTop: "10px" }}
                        >
                        Github
                        </Button>
                    </Card.Body>
                    </Card>
                </div>
                </Col>
            ))}
            </Row>
            </Container>

        </div>
    )
}


export default Project;
