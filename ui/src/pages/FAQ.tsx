import React from 'react';
import Button from 'antd/es/button';
import * as antd from 'antd';
import { textStyles } from '@allenai/varnish';

const sections = {"purpose": `The purpose of the AI2 ImpACT License is to support the use of AI for
        the common good through Accountability, Collaboration, and Transparency (“ACT”).
        The AI2 ImpACT License achieves these values by accepting certain ethical constraints
        on the use of AI and the self-reporting of users regarding their use cases, current applications,
        energy consumption, data set inputs, and funding sources, as captured and made publicly available
        in user ImpACT Reports.`}

const questions = [
    {
        question: "What is the AI2 ImpACT License?",
        answer: "The AI2 ImpACT License is an AI license for the common good -- that is, it is a license designed from the bottom-up to support the use of AI for the common good through Accountability, Collaboration, and Transparency (“ACT”). "
    },
    {
        question: "What is the purpose of the AI2 ImpACT License?",
        answer: "The purpose of the AI2 ImpACT License is to encourage AI researchers and engineers to share their code, software, and data freely with the assurance that the AI applications that arise from their contributions are put to good use. In addition, the AI2 ImpACT License relies on transparency and community accountability rather than litigation or legal action as the primary enforcement tool. "
    },
    {
        question: "Why is AI2 launching the AI2 ImpACT License?",
        answer: ""
    },
    {
        question: "Who should use the AI2 ImpACT License?",
        answer: ""
    },
    {
        question: "How is this different from other licenses?",
        answer: `The AI2 ImpACT License is tailored to the unique features of AI research in the following ways:

        It focuses directly on unlocking the black box and adds reporting requirements to emphasize transparency;
        It adopts new definitions and a licensing structure tailored to the AI lifecycle; and 
        It adopts community and collaborative enforcement techniques to address the challenge that comes when AI models and outputs change outside the control of the licensor.
        `
    },
    {
        question: "What is the AI2 Impact Report?",
        answer: `The AI2 ImpACT Report is the primary tool for operationalizing ACT.

        The AI2 ImpACT Report depends on the truthful self-reporting and mutual accountability of the AI community.`
    },
    {
        question: "How do I complete the AI2 ImpACT Report?",
        answer: ""
    },
    {
        question: "How do I view completed AI2 ImpACT Reports from others?",
        answer: ""
    },
    {
        question: "I want to use the AI2 ImpACT License -- what do I do?",
        answer: `Download a copy of the AI2 ImpACT License from [add link to website]. 
        Place this in the root level of the repository where you share your source code and/or data (e.g., where you would put the LICENSE file in a GitHub repository). 
        Fill out an ImpACT Report at [add link to website]. Download the completed form and place it in the root level of the repository where you share the source code of your new project (e.g., where you would put the LICENSE file in a GitHub repository).
        
        Note that if you publish or post a paper associated with the research product, you will additionally need to choose a license for the paper. Papers are not covered under the AI2 ImpACT License. For guidance regarding common paper licenses, see https://arxiv.org/help/license.
        
        If you want to use an AI product that is licensed under the AI2 ImpACT License: 
        Read the license in the product’s repository. 
        
        Fill out an ImpACT Report at [add link to website]. Download the completed form and place it in the root level of the repository where you share the source code of your new project (e.g., where you would put the LICENSE file in a GitHub repository). You are strongly encouraged (but not required) to report at tiers above or equal to the tiers in upstream reports.
        `
    },
    {
        question: "I want to use something subject to an AI2 ImpACT License -- what do I do?",
        answer: ""
    },
    {
        question: "I am a for profit organization -- can I use the AI2 ImpACT License?",
        answer: "Yes!"
    },
    {
        question: "I am part of an academic institution -- can I use the AI2 ImpACT License?",
        answer: "Yes!"
    },
    {
        question: "I am having trouble using the AI2 ImpACT License or generating an AI2 ImpACT report -- who can help me?",
        answer: ""
    },
]

export const FAQ = () => {
    return (
        <React.Fragment>
            {questions.map(q => (
                <div>
                    <antd.Divider style={{ marginBottom: 20 }}/>
                    <h4>{q.question}</h4>
                    <p>{q.answer}</p>
                </div>
            ))}
        </React.Fragment>
    );
};
