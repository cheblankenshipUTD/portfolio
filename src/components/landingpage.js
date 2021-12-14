import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, CardActions, Button, CardTitle } from 'react-mdl';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from './../img/profile-pic.png';
import Education from './education';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12} className="greeting">
                        <div className="head-prof-grid">
                            {/* Profile pic */}
                            <img src={profilePic} className="profile-pic" alt="profile pic" />
                            {/* Greeting */}
                            <div className="banner-text">
                                <h1>Hello, I'm Che.</h1>
                                <p/>
                                <h3>I'm a Computer Science student at <br /> The University of Texas at Dallas.</h3>
                                <p/>
                                <div className="social-links">
                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/in/che-b-jp-us/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                    </a>
                                    {/* Github */}
                                    <a href="https://github.com/cheblankenshipUTD" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github" aria-hidden="true" />
                                    </a>
                                    {/* Email */}
                                    <a href="https://github.com/cheblankenshipUTD" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Cell>


                    {/* Education */}
                    <Cell col={12}  className="education-quickview" style={{"margin":0, "margin-top":"10%"}}>
                        <h1>Education</h1>
                        <div className="education-grid">
                            {/* School 1 */}
                            <Education
                                startYear={2020}
                                endYear={2023}
                                location="Richardson, TX"
                                schoolName="The University of Texas at Dallas"
                                schoolDescription="Pursuing B.S Computer Science"
                            />
                            {/* School 2 */}
                            <Education
                                startYear={2018}
                                endYear={2020}
                                location="Austin, TX"
                                schoolName="Austin Community College"
                                schoolDescription="Teaching Assistant: Math 1336, Fall 2018"
                            />
                        </div>
                    </Cell>


                    {/* Projects */}
                    <Cell col={12}  className="project-quickview" style={{"margin":0, "margin-top":"10%"}}>
                        <h1>Projects</h1>
                        <div className="projects-grid">
                            {/* Project 1 */}
                            <Card shadow={2} style={{minWidth: '500', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.adobe.com/content/dam/cc/us/en/products/illustrator/icon-design/desktop/SEO_single-app_icon-design_P2b_416x208.jpg.img.jpg) center / cover'}}>
                                    Maze game
                                </CardTitle>
                                <CardText>
                                    Maze game built in MIPS assembly. Randomely generates a maze on a bit map.
                                    User can use their keyboard to move the bit from start to goal.
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                </CardActions>
                            </Card>

                            {/* Project 2 */}
                            <Card shadow={2} style={{minWidth: '500', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.adobe.com/content/dam/cc/us/en/products/illustrator/icon-design/desktop/SEO_single-app_icon-design_P2b_416x208.jpg.img.jpg) center / cover'}}>
                                    Location Share App
                                </CardTitle>
                                <CardText>
                                    Real time location sharing app. Share your GPS coordinates through an iOS app.
                                    Display your location on a Google Maps real time.
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                </CardActions>
                            </Card>

                            {/* Project 3 */}
                            <Card shadow={2} style={{minWidth: '500', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.adobe.com/content/dam/cc/us/en/products/illustrator/icon-design/desktop/SEO_single-app_icon-design_P2b_416x208.jpg.img.jpg) center / cover'}}>
                                    Eye Blink App
                                </CardTitle>
                                <CardText>
                                    Detect users' eye blinks using Python and OpenCV.
                                    Used PyQt5 for User Interface.
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Cell>


                </Grid>
            </div>
        )
    }
}


export default Landing;
