import * as React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { RouteComponentProps } from 'react-router';
import { Link } from '@allenai/varnish-react-router';
import { textStyles, LinkCSS, Layout, LeftSider } from '@allenai/varnish';
const { SubMenu } = Menu;

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

const reportSections =  [
    {
        label: 'Energy',
        icon: <ApiOutlined/>,
        children: [
            {
                path: './tier_0',
                label: 'Tier 0',
                component: () => <div>My Page</div>,
            },
            {
                path: './tier_1',
                label: 'Tier 1',
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
                component: () => <div>My Page</div>,
            },
            {
                path: './tier_1',
                label: 'Tier 1',
                component: () => <div>My Page</div>,
            },
        ],
    },

     {
        label: 'Funding',
         icon: <DollarCircleOutlined/>,
        children: [
            {
                path: './tier_0',
                label: 'Tier 0',
                component: () => <div>My Page</div>,
            },
            {
                path: './tier_1',
                label: 'Tier 1',
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
                component: () => <div>My Page</div>,
            },
            {
                path: './tier_1',
                label: 'Tier 1',
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

export const CreateReport= () => {
    let sectionRef: any = null;
  const onClick: MenuProps['onClick'] = e => {
      console.log(sectionRef);
    console.log('click ', e);
  };

  function onChange(group: string, e: any) {
    console.log(`checked = ${e.target.checked}`);
  }

  const siderWidthExpanded = '225px';
    const siderWidthCollapsed = '80px';
    const [menuCollapsed, setMenuCollapsed] = React.useState(false);
    const defaultSelected = ['./bla'];
    const allCollapsed = true;


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
                  defaultOpenKeys={!allCollapsed ? reportSections.map((c) => c.label) : []}
                  mode="inline"
                  items={reportSections.map(group => (
          getItem(group.label, group.label, group.icon,
        group.children.map(child => getItem(child.label, getSectionId(group.label, child.label)))
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
            <section  ref={ (ref) => sectionRef=ref } style={{ textAlign: 'center', marginBottom: 40 }}>
                <antd.Space align="start">
                    <Title level={2} style={{ marginBottom: 0 }}>
                        ImpACT Report
                    </Title>
                </antd.Space>
            </section>
            <div id={reportSections[0].label}>
                <antd.Divider style={{ marginBottom: 60 }}>
                    {reportSections[0].icon}  {reportSections[0].label}
                </antd.Divider>
                    <antd.Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
                        <antd.Radio.Group onChange={(e) => onChange(reportSections[0].label, e)}>
                            <antd.Radio value={0}>{reportSections[0].children[0].label}</antd.Radio>
                             <antd.Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
                                 <p> Describe machines </p>
                             </antd.Form>
                            <antd.Radio value={1}>{reportSections[0].children[1].label}</antd.Radio>
                            <antd.Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
                                <p> Carbon </p>
                            </antd.Form>
                            <antd.Radio value={2}>Tier 2</antd.Radio>
                        </antd.Radio.Group>
                        <antd.Form.Item label="It">
                        </antd.Form.Item>
                    </antd.Form>
            </div>
          </div>

      </Layout>
  );
};
