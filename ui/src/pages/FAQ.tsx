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
        question: "what?",
        answer: "yes"
    }
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
