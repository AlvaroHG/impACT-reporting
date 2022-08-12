import React from 'react';
import Button from 'antd/es/button';

const sections = {"purpose": `The purpose of the AI2 ImpACT License is to support the use of AI for
        the common good through Accountability, Collaboration, and Transparency (“ACT”).
        The AI2 ImpACT License achieves these values by accepting certain ethical constraints
        on the use of AI and the self-reporting of users regarding their use cases, current applications,
        energy consumption, data set inputs, and funding sources, as captured and made publicly available
        in user ImpACT Reports.`}

export const About = () => {
    return (
        <React.Fragment>
            <h1>About AI2 ImpACT License</h1>
            <p/>
            <p>
                The AI2 ImpACT License is a free license for AI Components.
            </p>
            <p>
                The purpose of the AI2 ImpACT License is to support the use of AI
                for the common good through Accountability, Collaboration, and Transparency (“ACT”).
                The AI2 ImpACT License achieves these values by accepting certain ethical constraints on the use of AI
                and the self-reporting of users regarding their use cases, current applications, energy consumption, data set inputs,
                and funding sources, as captured and made publicly available in user ImpACT Reports.
            </p>
            <p/>
            <p>
                This website facilitates the creation of the report that is part of this license.
            </p>
            <Button type="primary" href={"./create"}>Create Report</Button>
            <p/>
            <p>
                Once the report is created and downloaded you may place the report next to the license file in your source code.
            </p>

            <a href="./license">License</a>
        </React.Fragment>
    );
};
