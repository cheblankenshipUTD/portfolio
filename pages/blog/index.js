import React from 'react'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Container, Spinner } from 'react-bootstrap';
import moment from 'moment';

export const Blog = ({ blogs }) => {


    return (
        <div>
            <Container>
                <Row>
                {blogs.map(blog => {
                    return (
                    <Col md="10" style={{"margin": "auto", "margin-top": "10px", "margin-bottom": "10px"}}>
                        <div key={blog._id}>
                        <Card>
                            <Card.Body>
                            <Card.Header style={{"font-weight": "800"}}>{blog.title}</Card.Header>
                            <Card.Text>{blog.tags}</Card.Text>
                            <Card.Text>{moment(blog.date).format('YYYY-MM-DD')}</Card.Text>
                            <Card.Text>{blog.description}</Card.Text>
                            <Link href={`blog/${blog._id}`}>
                                <Button variant="dark" style={{"color": "white"}}>Read</Button>
                            </Link>
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

Blog.getInitialProps = async () => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs`);
    const res = await fetch(`/api/blogs`);
    const { data } = await res.json();
    return { blogs: data };
}

export default Blog;