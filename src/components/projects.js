import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import ProjCard from './subcomponents/projCard';


class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {


        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">

                    {/* Project 1 */}
                    <ProjCard
                        projectName="Maze Game"
                        discription="Maze game built in MIPS assembly. Randomely generates a maze on a bit map.User can use their keyboard to move the bit from start to goal."
                        url="https://github.com/cheblankenshipUTD"
                        buttonTitle="GitHub"
                    />

                    {/* Project 2 */}
                    <ProjCard
                        projectName="Location Share App"
                        discription="Real time location sharing app. Share your GPS coordinates through iOS app. Display your location on a Google Maps real time."
                        url="https://github.com/cheblankenshipUTD/Location-Share-App"
                        buttonTitle="GitHub"
                    />

                    {/* Project 3 */}
                     <ProjCard
                         projectName="Eye Blink App"
                         discription="Detect users' eye blinks using Python and OpenCV. Used PyQt5 for User Interface."
                         url="https://github.com/cheblankenshipUTD/Eye-Blink-Analysis"
                         buttonTitle="GitHub"
                     />

                </div>



            )
        }
        else if (this.state.activeTab === 1) {
            return(
                <div><h1>DS & Algo content coming soon...</h1></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return(
                <div><h1>C++ content coming soon...</h1></div>
            )
        }
        else if (this.state.activeTab === 3) {
            return(
                <div><h1>Leetcode content coming soon...</h1></div>
            )
        }
        else if (this.state.activeTab === 4) {
            return(
                <div><h1>Other content coming soon...</h1></div>
            )
        }
        else {
            return(
                <div><h1>This is DS & Algo</h1></div>
            )
        }
    }


    render() {
        return(
            <div className="category-tabs">

                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} >
                    <Tab>General</Tab>
                    <Tab>DS & Algorithms</Tab>
                    <Tab>C++</Tab>
                    <Tab>Coding Challenge</Tab>
                    <Tab>Other</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}


export default Projects;