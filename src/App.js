import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Document, Page } from "react-pdf";



function App() {
    return (
        <div className="App">
            <div className="demo-big-content">
                <Layout>
                    <Header title="Che Blankenship" className="nav-color" scroll href="/" waterfall="true">
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects / Blog</Link>
                            <Link to="/resume">Resume</Link>
                        </Navigation>
                    </Header>
                    <Content>
                        <div className="page-content" />
                        <Main/>
                    </Content>
                </Layout>
            </div>
        </div>
    );
}

export default App;
