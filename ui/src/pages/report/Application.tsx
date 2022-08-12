                           import * as React from 'react';
import * as antd from 'antd';
import Input from 'antd/es/input';
import {useState} from 'react';

import { Collapse } from 'antd';
import { Link } from '@allenai/varnish-react-router';

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
import {CheckboxChangeEvent} from 'antd/es/checkbox';
const Tier0Resource =  (props: any) => {
    return (

        <antd.Form.Item label="Describe your use and application of the licensed work.">
            <Input.TextArea rows={2} size="large"></Input.TextArea>
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

        <antd.Form.Item label="Describe a means by which the public can access a harms model, literature review, or biases analysis pertaining to your application.">
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
    const [applicationTier2Consent, setApplicationTier2Consent] = useState<boolean>(false);
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(e);
        setApplicationTier2Consent(e.target.checked);
    }
    return (

        <antd.Form.Item label="Describe the nature of the evolution of your work from the licensed work.">
            <Input.TextArea rows={2} size="large"></Input.TextArea>
            <antd.Checkbox onChange={onChange}>I consent to provide random slices of model input/output on request.</antd.Checkbox>
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

export const ApplicationSection = (props: any) => {
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
            <p>This section encompasses the use case and application of the source.</p>
            {/*<antd.Radio.Group onChange={props.onChange}>*/}
                 <Collapse bordered={false} defaultActiveKey={[]}>
                {props.children.map((child :any, i: number) => (

                         <Panel header={`Tier ${i}`} key={`${i}`}>
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