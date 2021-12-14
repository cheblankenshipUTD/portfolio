import React, { Component, State } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import resumePdf from "./../img/resume.pdf";


class Resume extends Component {

    constructor(props){
        super(props);
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {

        const { pageNumber, numPages } = this.state;

        return(
            <div style={{"margin-bottom": "5%"}}>
                <Document file={resumePdf} onLoadSuccess={this.onDocumentLoad}>
                    <Page pageNumber={1} />
                </Document>
            </div>
        )
    }
}

export default Resume;
