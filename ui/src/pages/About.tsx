import React from 'react';

const sections = {"purpose": `The purpose of the AI2 ImpACT License is to support the use of AI for
        the common good through Accountability, Collaboration, and Transparency (“ACT”).
        The AI2 ImpACT License achieves these values by accepting certain ethical constraints
        on the use of AI and the self-reporting of users regarding their use cases, current applications,
        energy consumption, data set inputs, and funding sources, as captured and made publicly available
        in user ImpACT Reports.`}

export const About = () => {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>{sections.purpose}</p>
            <p>TODO: blog post contents, or brief summary of motivation, or just remove this page?</p>
        </React.Fragment>
    );
};
