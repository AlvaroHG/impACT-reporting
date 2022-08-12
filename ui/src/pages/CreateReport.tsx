import * as React from 'react';
import styled from 'styled-components';
import Input from 'antd/es/input';
import { Menu } from 'antd';
import Button from 'antd/es/button';
import { Select } from 'antd';
import { RouteComponentProps } from 'react-router';
import { Link } from '@allenai/varnish-react-router';
import { textStyles, LinkCSS, Layout, LeftSider } from '@allenai/varnish';
const { SubMenu } = Menu;
import { DataAccess } from "./report/DataAccess";
import { EnergySection } from './report/Energy';
import { FundingSection } from './report/Funding';
import { ApplicationSection } from './report/Application';


const exampleReport = {
    "ai_evolution": {
        "tier_compliance": 1,
        "data": {
            "tier_0": { "Use and application of the licensed work.": "We will use this language model to generate song lyrics for our band." },
            "tier_1": {
                "Means by which the public can access a harms model, literature review, or biases analysis pertaining to your application.":
                    "We've published a harms model at our.website.com"
            },
            "tier_2": { "Nature of the evolution of your work from the licensed work.": "" }

        }
    },
    "data_access": {
        "tier_compliance": 1,
        "data": {
            "tier_0": { "Data description": "We (will) finetune the licensed model on song lyrics from Spotify, and run inference on manually crafted prompts." },
            "tier_1": { "Data analysis and steps towards data recreation": "The training data can scraped from spotify, via their public api. We will release our manually crafted prompts and outputs in our forthcoming paper." },
            "tier_2": { "Provided data: full training data link (0) or executable code to construct data (1)": "", "Links to data resoures": "" }
        },
    },
    "funding": {
        "tier_compliance": 0,
        "data": {
            "tier_0": { "Funding type": "external" },
            "tier_1": { "Organizations or entities involved in funding your work.": [] },
            "tier_2": { "Detailed record of all funding sources and allocated capital": [] }
        },
    },
    "energy": {
        "tier_compliance": 0,
        "data": {
            "tier_0": { "Computation resources": [{ "instance_hours": 500, "gpu_number": 1, "gpu_model": "nvidia-k80", "cpu": "intel i7", "memory": "8GB", "provider": "self", "location": "nyc" }] },
            "tier_1": { "Floating point operations": "" },
            "tier_2": { "carbon_footprints_of_instances": [] }
        }
    }
}


// you need to define the page structure of your app:
const componentGroups = [
    {
        label: 'Energy',
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


export const CreateReport1 = () => {
    const siderWidthExpanded = '225px';
    const siderWidthCollapsed = '80px';
    const [menuCollapsed, setMenuCollapsed] = React.useState(false);
    const defaultSelected = ['./bla'];
    return (
        <Layout>
            <LeftSider
                collapsible
                width={siderWidthExpanded}
                collapsedWidth={siderWidthCollapsed}
                collapsed={menuCollapsed}
                onCollapse={() => setMenuCollapsed(!menuCollapsed)}>
                <Menu
                    defaultSelectedKeys={defaultSelected}
                    defaultOpenKeys={componentGroups.map((c) => c.label)}>
                    {componentGroups.map((group) => (
                        <Menu.ItemGroup
                            key={group.label}
                            title={
                                !menuCollapsed ? (
                                    <SubMenu key={group.label} title={group.label}>
                                        <Link to={group.label}>{group.label}</Link>
                                    </SubMenu>
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
            <Layout>
                <p>HI</p>
            </Layout>
        </Layout>
    );
}

import { AppstoreOutlined, MailOutlined, SettingOutlined, RocketOutlined, DollarCircleOutlined, FundViewOutlined, ApiOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),

    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
];

const reportSections = [
    {
        label: 'Energy',
        icon: <ApiOutlined />,
        component: EnergySection,
        children: [
            {
                path: './tier_0',
                label: 'Tier 0',
                alias: 'Minimum Transparency',
                component: () => <div>My Page</div>,
            },
            {
                path: './tier_1',
                label: 'Tier 1',
                alias: 'Green Transparency',
                component: () => <div>My Page</div>,
            },
            {
                path: './tier_2',
                label: 'Tier 2',
                alias: 'Entropic Transparency',
                component: () => <div>My Page</div>,
            },
        ],
    },
    {
        label: 'Data Access',
        icon: <FundViewOutlined />,
        children: [
            {
                path: './tier_0',
                label: 'Tier 0',
                alias: 'Data Glance',
                component: () => <div>My Page</div>,
            },
            {
                path: './tier_1',
                label: 'Tier 1',
                alias: 'Data Transparency',
                component: () => <div>My Page</div>,
            },
            {
                path: './tier_2',
                label: 'Tier 2',
                alias: 'Shared Data',
                component: () => <div>My Page</div>,
            },
        ],
    },

    {
        label: 'Funding',
        icon: <DollarCircleOutlined />,
        children: [
            {
                path: './tier_0',
                label: 'Tier 0',
                alias: 'Disclosed Funding Type',
                component: () => <div>My Page</div>,
            },
            {
                path: './tier_1',
                label: 'Tier 1',
                alias: 'Disclosed Funders',
                component: () => <div>My Page</div>,
            },
            {
                path: './tier_2',
                label: 'Tier 2',
                alias: 'Disclosed Funding',
                component: () => <div>My Page</div>,
            },
        ],

    },
    {
        label: 'AI Evolution',
        icon: <RocketOutlined />,
        children: [
            {
                path: './tier_0',
                label: 'Tier 0',
                alias: 'Known Use',
                component: () => <div>My Page</div>,
            },
            {
                path: './tier_1',
                label: 'Tier 1',
                alias: 'Examinable Risk',
                component: () => <div>My Page</div>,
            },
            {
                path: './tier_2',
                label: 'Tier 2',
                alias: 'Open For Continuous Assessment',
                component: () => <div>My Page</div>,
            },
        ],

    },


]

const getSectionId = (groupName: string, sectionName: string) => {
    return `${groupName}_${sectionName}`;
}


import * as antd from 'antd';

const { Option } = antd.Select;
const { Title } = antd.Typography;

import { Collapse } from 'antd';
const { Panel } = Collapse;

export const CreateReport = () => {
    //.reduce((cs: any, cv: any) => ({...s, [cv.label]: false}
    // const init = reportSections.reduce((s: any, v: any) => ({ ...s, [v.label]: v.children.reduce((cs: any, cv: any) => ({...cs, [cv.label]: false}), {})}), {})
    // const init = { ...(reportSections.map(s => ({[s.label]: { ...s.children.map(c => ({[c.label]: false})) } })))}

    const init = reportSections.reduce((s: any, v: any) => ({ ...s, [v.label]: v.children.map((c: any, i: number) => i == 0) }), {});
    // const init = reportSections.reduce((s:any, v:any) => ({[v.label]: [true, false, false]}), {});
    // const init = {[reportSections[0].label]: reportSections[0].children.map((c, i) =>  i ==0 ),
    //     [reportSections[1].label]: reportSections[1].children.map((c, i) =>  i ==0 )
    // }
    console.log("State");
    console.log(init)
    const [state, setState] = React.useState<any>(init);
    let sectionRef: any = null;
    const onClick: MenuProps['onClick'] = e => {
        console.log(sectionRef);
        console.log('click ', e);
    };

    const onClickTier = (section: string, e: any) => {
        console.log(e);
        console.log(section)
        console.log(state)
        let newCheckState = !state[section][e.target.value];
        console.log("newCheckState");
        console.log(newCheckState)
        let newSectionChecks = state[section].map((c: any) => false);
        if (newCheckState) {
            for (let i = e.target.value; i >= 0; i--) {
                newSectionChecks[i] = newCheckState;
            }
        }
        else {
            let orHigher = false;
            for (let i = e.target.value + 1; i < state[section].length; i++) {
                orHigher = orHigher || state[section][i];
            }

            newSectionChecks[e.target.value] = orHigher ? orHigher : e.target.value != 0 ? newCheckState : state[section][0];
            console.log(`new state ${newSectionChecks[e.target.value]} ${newCheckState} ${orHigher}`)
            // if (!orHigher) {
            //     newSectionChecks[e.target.value] = newCheckState
            // }


            for (let i = e.target.value - 1; i >= 0; i--) {
                newSectionChecks[i] = state[section][i];
            }
        }

        setState({ ...state, [section]: newSectionChecks })
    }

    function onChange(group: string, e: any) {
        console.log(`checked = ${e.target.checked}`);
    }

    const siderWidthExpanded = '225px';
    const siderWidthCollapsed = '80px';
    const [menuCollapsed, setMenuCollapsed] = React.useState(false);
    const defaultSelected = ['./bla'];
    const allCollapsed = true;


    let report = exampleReport;


    return (
        <Layout>
            <LeftSider
                collapsible={true}
                width={siderWidthExpanded}
                collapsedWidth={siderWidthCollapsed}
                collapsed={menuCollapsed}
                onCollapse={() => setMenuCollapsed(!menuCollapsed)}>

                <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={!allCollapsed ? reportSections.map((c: any) => c.label) : []}
                    mode="inline"
                    items={reportSections.map((group: any) => (
                        getItem(group.label, group.label, group.icon,
                            group.children.map((child: any) => getItem(child.label, getSectionId(group.label, child.label)))
                        )
                    )
                    )}
                />

            </LeftSider>
            {/* Programatic way of doing it*/}
            {/*{*/}
            {/*    reportSections.map(group =>*/}
            {/*        (<div id={group.label}>*/}
            {/*            <h2>{group.label}</h2>*/}
            {/*            <antd.Radio.Group onChange={(e) => onChange(group.label, e)}>*/}
            {/*                {group.children.map(*/}
            {/*                    (child, i) => (*/}
            {/*                        <antd.Radio value={i}>{child.label}</antd.Radio>*/}
            {/*                    )*/}
            {/*                )}*/}
            {/*            </antd.Radio.Group>*/}

            {/*        </div>)*/}
            {/*    )*/}
            {/*}*/}
            <div style={{ width: 1000 }}>
                <section ref={(ref) => sectionRef = ref} style={{ textAlign: 'center', marginBottom: 40 }}>
                    <antd.Space align="start">
                        <Title level={2} style={{ marginBottom: 0 }}>
                            ImpACT Report
                        </Title>
                    </antd.Space>
                    <p>This report comprises four different sections each with three tiers of impact transparency.
                        Each increasing tier means more transparency and requires reporting of all the tiers below it.
                    </p>
                </section>
                <EnergySection {...reportSections[0]} onClickTier={onClickTier} checkedState={state[reportSections[0].label]} />
                <DataAccess {...reportSections[1]} onClickTier={onClickTier} checkedState={state[reportSections[1].label]} />
                <FundingSection {...reportSections[2]} onClickTier={onClickTier} checkedState={state[reportSections[2].label]} />
                <ApplicationSection {...reportSections[3]} onClickTier={onClickTier} checkedState={state[reportSections[3].label]} />
                <section>
                    <br />
                    <br />
                    <Button type="primary"
                        href={`data:text/json;charset=utf-8,${encodeURIComponent(
                            JSON.stringify(report)
                        )}`}
                        download="impactReport.json">Generate ImpACT Report</Button>
                </section>
            </div>
        </Layout>
    );
};
