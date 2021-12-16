import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import termsFrPath from "./../../markdowns/types_of_recursion.md";

class Blog extends Component {


    constructor(props) {
        super(props)
        this.state = { terms: null }
    }

    componentWillMount() {
        fetch(termsFrPath).then((response) => response.text()).then((text) => {
            this.setState({ terms: text })
        })
    }

    render() {
        return (
          <div>
            <h4>Topic: {this.props.keyword}</h4>
            <h5>Date: {this.props.date}</h5>
            <ReactMarkdown
                children={this.state.terms}
                escapeHtml={false}
            />
          </div>
        )
    }
}


export default Blog;
