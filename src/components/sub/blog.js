import React, { useState, useEffect, Component } from 'react';
import Markdown from 'markdown-to-jsx'
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import markDownPath from "./../../markdowns/types_of_recursion.md";

function Blog2(props){

    const [post, setPost] = useState("");

    useEffect(() => {
        import(`./../../markdowns/${props.fileName}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
            })
            .catch(err => console.log(err));
    })

    return (
        <div>
            <h4>Topic: {props.keyword}</h4>
            <h5>Date: {props.date}</h5>
            <Markdown>
                {post}
            </Markdown>
        </div>
    )
}


export default Blog2;
