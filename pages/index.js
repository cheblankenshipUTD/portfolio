import { Row, Col, Container } from 'react-bootstrap';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Education from '../components/Education';
import Experience from '../components/Experience';


const Index = () => {
  return (
    <div>
      <div className='landing-page'>
        <Container>
          <Row className='head-profile'>
            <Col md={6}>
              {/* Profile pic */}
              <img src="./images/profile-pic.png" className="profile-pic" alt="profile pic" />
            </Col>
            <Col md={6}>
              {/* Greeting */}
              <div className="banner-text">
                  <h1>Hi, I'm Che.</h1>
                  <p/>
                  <h3>Software Engineer at LM</h3>
                  <p/>
                  <div className="social-links">
                      {/* LinkedIn */}
                      <a href="https://www.linkedin.com/in/cheblankenship/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                      {/* Github */}
                      <a href="https://github.com/cheblankenshipUTD" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github" aria-hidden="true" />
                      </a>
                      {/* Email */}
                      <a href="mailto:che.blankenship@utdallas.edu?subject=Email from portfolio&body=Sending message from portfolio email link">
                          <i className="fa fa-envelope" aria-hidden="true" />
                      </a>
                  </div>
              </div>
            </Col>
          </Row>
          {/* Education */}
          <div className='education-wrapper'>
            <h2 style={{"text-decoration": "underline"}}>Education</h2>
            <Row style={{"margin-top": "50px"}}>
              <Col md={6} style={{"margin-top": "25px", "margin-bottom": "25px"}}>
              <Education
                startYear="2020"
                endYear="May 2023"
                schoolName="The University of Texas at Dallas"
                location="Richardson, TX"
                schoolDescription="B.S Computer Science"
              />
              </Col>
              <Col md={6} style={{"margin-top": "25px", "margin-bottom": "25px"}}>
              <Education
                startYear="2018"
                endYear="2020"
                schoolName="Austin Community College"
                location="Austin, TX"
                schoolDescription=""
              />
              </Col>
            </Row>
          </div>
          {/* Experience */}
          <div className='experience-wrapper'>
          <h2 style={{"text-decoration": "underline"}}>Experience</h2>
          <Row style={{"margin-top": "25px"}}>
          <Col md={3} style={{"margin-top": "25px", "margin-bottom": "25px"}}>
            <Experience
              startYear="2023"
              endYear="Current"
              jobName="Lockheed Martin"
              location="Fort Worth, TX"
              jobDescription="Software Engineer Asc."
            />
            </Col>
            <Col md={3} style={{"margin-top": "25px", "margin-bottom": "25px"}}>
            <Experience
              startYear="2021"
              endYear="2022"
              jobName="Spatial Datalyst"
              location="Richardson, TX"
              jobDescription="Full Stack Developer"
            />
            </Col>
            <Col md={3} style={{"margin-top": "25px", "margin-bottom": "25px"}}>
            <Experience
              startYear="2018"
              endYear="2019"
              jobName="Austin Community College"
              location="Austin, TX"
              jobDescription="TA for College Algebra (Math 1316)"
            />
            </Col>
            <Col md={3} style={{"margin-top": "25px", "margin-bottom": "25px"}}>
            <Experience
              startYear="2017"
              endYear="2018"
              jobName="AlphaNodus"
              location="Austin, TX"
              jobDescription="Software Engineer Intern"
            />
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Index;
