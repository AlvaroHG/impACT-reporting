import React from 'react';
import Button from 'antd/es/button';
import { DownloadOutlined } from '@ant-design/icons';
import { textStyles } from '@allenai/varnish';

const { InlineCode, Code } = textStyles;

export const License = () => {
    // const downloadTxtFile = () => {
    //     const element = document.createElement("a");
    //     const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
    //     element.href = URL.createObjectURL(file);
    //     element.download = "/AI2 ImpACT License.txt";
    //     document.body.appendChild(element); // Required for this to work in FireFox
    //     element.click();
    // }
    return (
        <React.Fragment>
            <h1>AI2 ImpACT License</h1>
            <p/>
            <Button type="primary" icon={<DownloadOutlined />} href={"/AI2 ImpACT License.txt"}  >
                License Text File</Button>
            <p/>
            <Code variant="dark">
               License
                PLEASE READ THIS AI2 ImpACT LICENSE AGREEMENT (“AGREEMENT”) CAREFULLY.<br/>
                THIS IS A LEGAL AGREEMENT.  BY CLICKING “I ACCEPT”, DOWNLOADING, INSTALLING, LOGGING INTO, ACCESSING OR OTHERWISE USING ANY PART OF THE AI COMPONENTS OR OTHERWISE MANIFESTING YOUR ASSET TO THESE TERMS, YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS AGREEMENT.  IF YOU DO NOT UNEQUIVOCALLY AGREE TO THE TERMS OF THIS AGREEMENT, CLICK “I DO NOT ACCEPT” AND DO NOT DOWNLOAD, INSTALL, ACCESS, COPY, OR OTHERWISE USE THE AI COMPONENTS.

                ... [Add final license]
            </Code>


        </React.Fragment>
    );
};
