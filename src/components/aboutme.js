import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class About extends Component {



    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>

                {/* Experience */}
                <Grid>
                    <Cell col={12}  className="education-quickview" style={{"margin":0, "margin-top":"10%"}}>
                        <h1>Experience</h1>
                        <div className="education-grid" style={{"text-align":"center"}}>
                            <Experience
                                startYear={2021}
                                endYear={"Current"}
                                location="Richardson, TX"
                                jobName={"SpatialDatalyst"}
                                jobDescription={"Software Engineer Intern"}
                            />
                            <Experience
                                startYear={2018}
                                endYear={2018}
                                location="Austin, TX"
                                jobName={"Austin Community College"}
                                jobDescription={"Teaching Assistant for Math 1316"}
                            />
                            <Experience
                                startYear={2017}
                                endYear={2018}
                                location="Austin, TX"
                                jobName={"AlphaNodus"}
                                jobDescription={"Software Engineer Intern"}
                            />
                        </div>
                    </Cell>
                </Grid>



                {/* Education */}
                <Grid>
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
                </Grid>



            </div>
        )
    }
}


export default About;
