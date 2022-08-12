                           import * as React from 'react';
import * as antd from 'antd';
import Input from 'antd/es/input';
import {useState} from 'react';

import { Collapse } from 'antd';
import { Select } from 'antd';
import { Link } from '@allenai/varnish-react-router';
const { Option } = antd.Select;

const { Panel } = Collapse;

const dataTypes = [
    "bitmap",
    "sound",
    "text",
    "timeseries",
    "mixed",
    "other"
];

// Dataset description, some number of training examples (probably already in the paper)
                           // If data involves human subjects, describe behavioral research protocols (e.g., IRB, payment, confidentiality)
const Tier0Resource =  (props: any) => {
    const [fundingType, setFundingType] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e);
        setFundingType(e.target.value);
    }
    return (

        <antd.Form.Item label="Select the type of funding used for your work.">
            <Select onSelect={onChange} placeholder="Select funding source.">
                <Option value="cannot_legally_disclose">Cannot Legally Disclose</Option>
                <Option value="within_institution">Within Institution</Option>
                <Option value="external">External</Option>
                <Option value="none">None</Option>
            </Select>
        </antd.Form.Item>
    )
}

import { QuestionCircleOutlined } from '@ant-design/icons';

const tier0: React.FC = (props: any) => {

    return (
        <div>
            <h5>{props.alias}</h5>
            <Tier0Resource {...props}/>
        </div>
    )
}

import { textStyles } from '@allenai/varnish';

const { InlineCode } = textStyles;


// General description of how data was generated. (“We scraped all Wikipedia pages using parser X and removed all pages longer than 1000 words…”)
                           // Bias analysis, links to literature, studies or own study.
const Tier1Resource =  (props: any) => {
    return (

        <antd.Form.Item label="List all organizations or entities involved in funding your work.">
            <Input.TextArea rows={2} size="large"></Input.TextArea>
        </antd.Form.Item>
    )
}

const tier1 = (props: any) => {
    return (
        <div>
           <h5>{props.alias}</h5>
            {/*<p>Data analysis and steps towards data recreation</p>*/}
            {[...Array(props.instanceDescriptions).keys()].map(i => (<Tier1Resource index={i}/>))}
        </div>
    )
}


const Tier2Resource =  (props: any) => {
    return (
        <antd.Form.Item label="Provide a detailed record of all funding sources and allocated capital.">
            <Input.TextArea rows={2} size="large"></Input.TextArea>
        </antd.Form.Item>
    )
}

const tier2 = (props: any) => {
    return (
        <div>
            <h5>{props.alias}</h5>
            {[...Array(props.instanceDescriptions).keys()].map(i => (<Tier2Resource index={i}/>))}
        </div>
    )
}

const tiers = [tier0, tier1, tier2];

export const FundingSection = (props: any) => {
    const [objArr, setObjArr] = useState<{instanceDescriptions: number}>({
        instanceDescriptions: 1
    });
    const onChange = (e: number) => {
        console.log(e);

        setObjArr({instanceDescriptions: e});
    }
    return (
        <div id={props.label}>
                <antd.Divider style={{ marginBottom: 60 }}>
                    {props.icon}  {props.label}
                </antd.Divider>
            <p>This section encompasses the capital used to fund the work.</p>
            {/*<antd.Radio.Group onChange={props.onChange}>*/}
                 <Collapse bordered={false} defaultActiveKey={props.children.map((child :any, i: number) =>`${i}`)}>
                {props.children.map((child :any, i: number) => (

                         <Panel header="" key={`${i}`}>
                             <div>
                                 <antd.Checkbox value={i} checked={props.checkedState[i]} onClick={(e: any) => props.onClickTier(props.label, e)}>{child.label}</antd.Checkbox>
                                 {/*<antd.Radio value={i}>{child.label}</antd.Radio>*/}
                                 {tiers[i]({...props, ...objArr, setObjArr, ...child})}
                             </div>
                         </Panel>

                ))}
                 </Collapse>
            </div>

    )
}