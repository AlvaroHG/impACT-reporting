import React from 'react';
import Button from 'antd/es/button';
import { Link } from '@allenai/varnish-react-router';

export const Report = () => {
    return (
        <React.Fragment>
            <h1>Download Report Template</h1>
            <p>We provide a template form that you can fill out to comply with the reporting obligations of the license.</p>
            <p>
                Download the form below, fill out the relevant information for your selected tier compliance in each category,
                and make this report publicly as described in the license.
            </p>
            <Link to="/report.pdf" target="_blank" download><Button>Download Template</Button></Link>
            <br/><br/>
            <Button type="primary" href={'https://docs.google.com/forms/d/e/1FAIpQLSduTmceC6ObKsBwyrfP2qa1pAJH9ffD4ado138XsqVxr3FzWg/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link'}>Fill Report</Button>
        </React.Fragment>
    );
};
