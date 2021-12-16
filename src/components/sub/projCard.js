import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class ProjCard extends Component {
    render() {
        return(
            <Card shadow={2} style={{minWidth: '500', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.adobe.com/content/dam/cc/us/en/products/illustrator/icon-design/desktop/SEO_single-app_icon-design_P2b_416x208.jpg.img.jpg) center / cover'}}>
                    {this.props.projectName}
                </CardTitle>
                <CardText>
                    {this.props.discription}
                </CardText>
                <CardActions border>
                <a href={this.props.url} rel="noopener noreferrer" target="_blank">
                    <Button colored>{this.props.buttonTitle}</Button>
                </a>
                </CardActions>
            </Card>
        )
    }
}


export default ProjCard;
