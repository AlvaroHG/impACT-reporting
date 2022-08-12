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
    const [involvesHuman, setInvolvesHuman] = useState<boolean>(false);
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(e);
        setInvolvesHuman(e.target.checked);
    }
    return (

        <antd.Form.Item label={`Data description:`}>
            <br/>
            Dataset Desctiption:
            <Input.TextArea rows={2} size="large"></Input.TextArea>
            <br/>
                Links to Training Examples:
                <Input.TextArea rows={2} size="large"></Input.TextArea>
                 <antd.Form.Item>
                 <p>Data Type:</p>
                 <antd.Select placeholder="DataType">
                      {dataTypes.map(l => (
                        <antd.Select value={l}>{l}</antd.Select>
                    ))}
                 </antd.Select>
             </antd.Form.Item>
                Paper: <antd.Input/>
            <br/>
            <antd.Checkbox onChange={onChange}>Data involves Human subjects</antd.Checkbox>
            {involvesHuman? (<div>Link to Behavioral Research Protocol Study
                <antd.Tooltip title={`e.g., IRB, payment, confidentiality. More Info: https://www.nidcr.nih.gov/research/human-subjects-research`}>
                <span><QuestionCircleOutlined /></span>
            </antd.Tooltip> :: <antd.Input/></div>) : null}
        </antd.Form.Item>
    )
}

import { QuestionCircleOutlined } from '@ant-design/icons';

const tier0: React.FC = (props: any) => {

    return (
        <div>
            <h5>{props.alias}</h5>
            <p>Describing the Dataset with limited examples.</p>
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

        <antd.Form.Item label={`Data analysis and steps towards data recreation`}>
            Detailed desctiption on how the dataset was generated
            <antd.Tooltip title={'eg. We scraped all Wikipedia pages using parser X and removed all pages longer than 1000 words….'}>
                <span><QuestionCircleOutlined /></span>
            </antd.Tooltip>:
            <Input.TextArea rows={2} size="large"></Input.TextArea>
            Link to Bias Analysis Studies
            <antd.Tooltip title={'TODO link to studies.'}>
                <span><QuestionCircleOutlined /></span>
            </antd.Tooltip>:
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

        <antd.Form.Item label={`Training Data Options: `}>
            <br/>
            <antd.Radio.Group>
                <antd.Radio value={0}>Full Training Data</antd.Radio>
                <antd.Radio value={1}>Executable code to recreate training data.</antd.Radio>
            </antd.Radio.Group>
            <br/>
            <br/>
            Links To Training Data Resources: <Input.TextArea rows={2} size="large"></Input.TextArea>
        </antd.Form.Item>
    )
}

const tier2 = (props: any) => {
    return (
        <div>
            <h5>{props.alias}</h5>
            <p>Full training data</p>
            {[...Array(props.instanceDescriptions).keys()].map(i => (<Tier2Resource index={i}/>))}
        </div>
    )
}

const tiers = [tier0, tier1, tier2];

export const DataAccess = (props: any) => {
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
            <p>This section encompasses the data used to train, use or modify the source.</p>
            {/*<antd.Radio.Group onChange={props.onChange}>*/}
                 <Collapse bordered={false} defaultActiveKey={[]}>
                {props.children.map((child :any, i: number) => (

                         <Panel header={ <antd.Checkbox value={i} checked={props.checkedState[i]} onClick={(e: any) => props.onClickTier(props.label, e)}>{child.label}</antd.Checkbox>} key={`${i}`}>
                             <div>
                                 {tiers[i]({...props, ...objArr, setObjArr, ...child})}
                             </div>
                         </Panel>

                ))}
                 </Collapse>
            </div>

    )
}