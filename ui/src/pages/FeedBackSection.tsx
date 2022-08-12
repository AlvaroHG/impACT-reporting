import React from 'react';
import Button from 'antd/es/button';
import * as antd from 'antd';

import { Link } from '@allenai/varnish-react-router';

export const FeedBackSection = () => {
    return (
        <React.Fragment>
             <Button type="primary" href={'https://docs.google.com/forms/d/e/1FAIpQLSfwB8a8kXrWVu0j1i498YM2rqEvSIIn3N-ApKhYKMXTayWZPA/viewform?usp=sf_link'}>Feedback Form</Button>
        </React.Fragment>
    );
};

