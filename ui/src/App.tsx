/**
 * This is the top-level component that defines your UI application.
 *
 * This is an appropriate spot for application wide components and configuration,
 * stuff like application chrome (headers, footers, navigation, etc), routing
 * (what urls go where), etc.
 *
 * @see https://github.com/reactjs/react-router-tutorial/tree/master/lessons
 */

import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Content, Footer, Layout, LeftSider, textStyles } from '@allenai/varnish';
import Menu from 'antd/es/menu';
import { Link } from '@allenai/varnish-react-router';

import { About } from './pages/About';
import { FAQ } from './pages/FAQ';
import { FeedBackSection } from './pages/FeedBackSection';
import { Home } from './pages/Home';
import { License } from './pages/License';
import { Viewer } from './pages/Viewer';
import { Report } from './pages/Report';
import { CreateReport } from './pages/CreateReport';
import { AppRoute } from './AppRoute';


/**
 * An array capturing the available routes in your application. You can
 * add or remove routes here.
 */
const ROUTES: AppRoute[] = [
    {
        path: '/',
        label: 'Home',
        component: About,
    },
    {
        path: '/license',
        label: 'License',
        component: License,
    },
    {
        path: '/create',
        label: 'Create Report',
        component: CreateReport,
    },
    {
        path: '/viewer',
        label: 'Viewer',
        component: Viewer,
    },
    {
        path: '/faq',
        label: 'FAQ',
        component: FAQ,
    },
    {
        path: '/feedback',
        label: 'Feedback',
        component: FeedBackSection,
    }
];


// you need to define the page structure of your app:
const componentGroups = [
    {
        label: 'Group 1',
        routes: [
            {
                path: './bla',
                label: 'Page 1',
                component: () => <div>My Page</div>,
            },
            {
                path: './bla2',
                label: 'Page 2',
                component: () => <div>My Page</div>,
            },
        ],
    },
    {
        label: 'Group 2',
        routes: [
            {
                path: './bla3',
                label: 'Page 3',
                component: () => <div>My Page</div>,
            },
            {
                path: './bla4',
                label: 'Page 4',
                component: () => <div>My Page</div>,
            },
        ],
    },
];

const MyMenu = (props: RouteComponentProps) => {
    const siderWidthExpanded = '225px';
    const siderWidthCollapsed = '80px';
    const [menuCollapsed, setMenuCollapsed] = React.useState(false);

    return (
        <LeftSider
            collapsible
            width={siderWidthExpanded}
            collapsedWidth={siderWidthCollapsed}
            collapsed={menuCollapsed}
            onCollapse={() => setMenuCollapsed(!menuCollapsed)}>
            <Menu
                defaultSelectedKeys={[props.location.pathname]}
                defaultOpenKeys={componentGroups.map((c) => c.label)}>
                {componentGroups.map((group) => (
                    <Menu.ItemGroup
                        key={group.label}
                        title={
                            !menuCollapsed ? (
                                <textStyles.Small>{group.label}</textStyles.Small>
                            ) : (
                                <Menu.Divider />
                            )
                        }>
                        {group.routes.map((route) => (
                            <Menu.Item key={route.label}>
                                <Link to={route.path}>{route.label}</Link>
                            </Menu.Item>
                        ))}
                    </Menu.ItemGroup>
                ))}
            </Menu>
        </LeftSider>
    );
};

export const App = (props: RouteComponentProps) => {
    return (
        <BrowserRouter>
            <Route path="/">
                <Layout bgcolor="white">
                    <Header>
                        <Header.Columns columns="auto 1fr 100px">
                            <Header.Logo label={<Header.AppName>ImpACT</Header.AppName>}>
                                <SimpleLogo>
                                    <span role="img" aria-label="impact Logo">
                                        {
                                            '👣️'
                                        }
                                    </span>
                                </SimpleLogo>
                            </Header.Logo>
                            <OverflowHidden>
                            <Header.MenuColumn>
                                <Menu
                                    defaultSelectedKeys={[props.location.pathname]}
                                    mode="horizontal"
                                >
                                    {ROUTES.map(({ path, label }) => (
                                        <Menu.Item key={path}>
                                            <Link to={path}>{label}</Link>
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            </Header.MenuColumn>
                            </OverflowHidden>
                        </Header.Columns>
                    </Header>
                    <Content main>
                        {ROUTES.map(({ path, component }) => (
                            <Route key={path} path={path} exact component={component} />
                        ))}
                    </Content>
                    <Footer />
                </Layout>
            </Route>
        </BrowserRouter>
    );
};

const SimpleLogo = styled.div`
    border-radius: 25px;
    width: 50px;
    height: 50px;
    line-height: 1;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: ${({ theme }) => theme.color.R4};
`;

const OverflowHidden = styled.div`
    overflow: hidden;
`;
