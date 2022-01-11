import { Row, Col } from 'react-bootstrap';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const Footer = () => (
    <footer className="footer-wrapper">
        <Row className='footer-email-name'>
            <Col ms={1}>
                <p>che.blankenship@utdallas.edu | 2022</p>
            </Col>
        </Row>
        <Row className='footer-social-links'>
        <Col ms={1}>
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
            </Col>
        </Row>
    </footer>
)

export default Footer;