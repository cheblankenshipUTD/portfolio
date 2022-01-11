import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';


export const Resume = () => {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess ({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} style={{"text-align": "center"}}>
                    <Link href="./resume.pdf" download="Che Blankenship Resume" className="download-button">
                        <Button variant="dark" style={{"color": "white"}}>Download</Button>
                    </Link>
                    </Col>
                </Row>
            </Container>
            <Document
                file="./resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} />
      </Document>
        </div>
    )
}


export default Resume;