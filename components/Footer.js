import { Row, Col } from 'react-bootstrap';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const Footer = () => (
    <footer className="footer-wrapper">
        <Row className='footer-social-links'>
        <Col ms={1}>
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
            </Col>
        </Row>
        <Row className='footer-email-name'>
            <Col ms={1}>
                <p>2024 | v.1.0.9</p>
            </Col>
        </Row>
    </footer>
)

export default Footer;