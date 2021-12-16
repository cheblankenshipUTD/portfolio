import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './landingpage';
import About from './aboutme';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';


const Main = () => (

      <Routes>
      <Route exact path = '/' element = {<Landing/>} />
      <Route path = '/aboutme' element = {<About/>} />
      <Route path = '/contact' element = {<Contact/>} />
      <Route path = '/projects' element = {<Projects/>} />
      <Route path = '/resume' element = {<Resume/>} />
      </Routes>

)

export default Main;
