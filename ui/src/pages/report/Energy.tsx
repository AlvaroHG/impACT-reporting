                           import * as React from 'react';
import * as antd from 'antd';
import Input from 'antd/es/input';
import {useState} from 'react';

import { Collapse } from 'antd';
import { Link } from '@allenai/varnish-react-router';

const { Panel } = Collapse;


const locations = [
  "asia-east1-a",
  "asia-east1-b",
  "asia-east1-c",
  "asia-east2-a",
  "asia-east2-b",
  "asia-east2-c",
  "asia-northeast1-a",
  "asia-northeast1-b",
  "asia-northeast1-c",
  "asia-northeast2-a",
  "asia-northeast2-b",
  "asia-northeast2-c",
  "asia-northeast3-a",
  "asia-northeast3-b",
  "asia-northeast3-c",
  "asia-south1-a",
  "asia-south1-b",
  "asia-south1-c",
  "asia-south2-a",
  "asia-south2-b",
  "asia-south2-c",
  "asia-southeast1-a",
  "asia-southeast1-b",
  "asia-southeast1-c",
  "asia-southeast2-a",
  "asia-southeast2-b",
  "asia-southeast2-c",
  "australia-southeast1-a",
  "australia-southeast1-b",
  "australia-southeast1-c",
  "australia-southeast2-a",
  "australia-southeast2-b",
  "australia-southeast2-c",
  "europe-central2-a",
  "europe-central2-b",
  "europe-central2-c",
  "europe-north1-a",
  "europe-north1-b",
  "europe-north1-c",
  "europe-southwest1-a",
  "europe-southwest1-b",
  "europe-southwest1-c",
  "europe-west1-b",
  "europe-west1-c",
  "europe-west1-d",
  "europe-west2-a",
  "europe-west2-b",
  "europe-west2-c",
  "europe-west3-a",
  "europe-west3-b",
  "europe-west3-c",
  "europe-west4-a",
  "europe-west4-b",
  "europe-west4-c",
  "europe-west6-a",
  "europe-west6-b",
  "europe-west6-c",
  "europe-west8-a",
  "europe-west8-b",
  "europe-west8-c",
  "europe-west9-a",
  "europe-west9-b",
  "europe-west9-c",
  "northamerica-northeast1-a",
  "northamerica-northeast1-b",
  "northamerica-northeast1-c",
  "northamerica-northeast2-a",
  "northamerica-northeast2-b",
  "northamerica-northeast2-c",
  "southamerica-east1-a",
  "southamerica-east1-b",
  "southamerica-east1-c",
  "southamerica-west1-a",
  "southamerica-west1-b",
  "southamerica-west1-c",
  "us-central1-a",
  "us-central1-b",
  "us-central1-c",
  "us-central1-f",
  "us-east1-b",
  "us-east1-c",
  "us-east1-d",
  "us-east4-a",
  "us-east4-b",
  "us-east4-c",
  "us-east5-a",
  "us-east5-b",
  "us-east5-c",
  "us-south1-a",
  "us-south1-b",
  "us-south1-c",
  "us-west1-a",
  "us-west1-b",
  "us-west1-c",
  "us-west2-a",
  "us-west2-b",
  "us-west2-c",
  "us-west3-a",
  "us-west3-b",
  "us-west3-c",
  "us-west4-a",
  "us-west4-b",
  "us-west4-c"
];

const providers = [
    "AWS",
    "GCP",
    "Azure",
    "Cirrascale",
    "Other"
];

const Tier0Resource =  (props: any) => {
    return (

        <antd.Form.Item label={`Computation resources ${props.index}`}>
            <br/>
            Instance-hours
            <antd.InputNumber min={1} defaultValue={1} />
            <br/>
                GPU
                Number <antd.InputNumber min={0} defaultValue={0} />
            <br/>
                <antd.Form.Item label="GPU Model">
                    <antd.Select placeholder="Select GPU Model">
                        <antd.Select value="Quadro RTX 8000">Quadro RTX 8000</antd.Select>
                        <antd.Select value="Nvidia Titan X">Nvidia Titan X</antd.Select>
                        <antd.Select value="Nvidia Titan RTX">Nvidia Titan RTX</antd.Select>
                        <antd.Select value="Other">Other</antd.Select>
                    </antd.Select>
                    Other: <antd.Input/>
                </antd.Form.Item>
            <antd.Form.Item>
                CPU: <antd.Input />
            </antd.Form.Item>
             <antd.Form.Item>
                Memory: <antd.InputNumber min={0} defaultValue={0} />
             </antd.Form.Item>
             <antd.Form.Item>
                 <p>Provider</p>
                 <antd.Select placeholder="Provider">
                      {providers.map(l => (
                        <antd.Select value={l}>{l}</antd.Select>
                    ))}
                 </antd.Select>
             </antd.Form.Item>
             <antd.Form.Item>
                <p>at Location</p>
                 <antd.Select placeholder="Instance Location">
                    {locations.map(l => (
                        <antd.Select value={l}>{l}</antd.Select>
                    ))}
                 </antd.Select>
              </antd.Form.Item>
        </antd.Form.Item>
    )
}

import { QuestionCircleOutlined } from '@ant-design/icons';



const tier0: React.FC = (props: any) => {
    // const [objArr, setObjArr] = useState<{instanceDescriptions: number}>({
    //     instanceDescriptions: 1
    // });
    const onChange = (e: number) => {
        console.log(e);
        props.setObjArr({instanceDescriptions: e});
    }
    return (
        <div>
            <h5>{props.alias}</h5>
            <p>Describing the computation used to train AI components</p>
            Number of Parameters (Millions): <antd.InputNumber min={0} defaultValue={0} />
            <p/>
            Instance Description Number:  <antd.InputNumber min={1} defaultValue={1} onChange={(e: any) => onChange(e)} />
            {[...Array(props.instanceDescriptions).keys()].map(i => (<Tier0Resource index={i}/>))}

        </div>
    )
}

import { textStyles } from '@allenai/varnish';

const { InlineCode } = textStyles;

const energyTypes = [
    "Carbon",
    "Oil",
    "Gas",
    "Eolic",
    "Solar",
    "Nuclear",
    "Other"
];
const Tier1Resource =  (props: any) => {
    return (

        <antd.Form.Item label={`Carbon Footprint Of Instance ${props.index}: `}>
            <br/>
            Floating Point Operations
            <antd.Tooltip title={`floating point operations (FPO) required to generate a result. Relevant Research: https://arxiv.org/pdf/1907.10597.pdf`}>
                <span><QuestionCircleOutlined /></span>
            </antd.Tooltip> :
            <antd.InputNumber min={0} defaultValue={0} />
           <antd.Select placeholder="Energy Type">
                      {energyTypes.map(l => (
                        <antd.Select value={l}>{l}</antd.Select>
                    ))}
           </antd.Select>
            Other: <antd.Input/>
        </antd.Form.Item>
    )
}

const tier1 = (props: any) => {
    return (
        <div>
            <h5>{props.alias}</h5>
            <p>Describing the carbon footprint.</p>
            <antd.InputNumber readOnly={true} value={props.instanceDescriptions}/>
            {[...Array(props.instanceDescriptions).keys()].map(i => (<Tier1Resource index={i}/>))}
        </div>
    )
}


const Tier2Resource =  (props: any) => {
    return (

        <antd.Form.Item label={`Energy use of Instance ${props.index}: `}>
            <br/>
            Watts-Per Hour:
            <antd.Tooltip title={'watts-per-hour, or Joules is the most transparent metric of energetic use.'}>
                <span><QuestionCircleOutlined /></span>
                <antd.InputNumber min={0} defaultValue={0} />
            </antd.Tooltip>
        </antd.Form.Item>
    )
}

const tier2 = (props: any) => {
    return (
        <div>
            <h5>{props.alias}</h5>
            <p>Describe the carbon footprint:</p>
            <antd.InputNumber readOnly={true} value={props.instanceDescriptions}/>
            {[...Array(props.instanceDescriptions).keys()].map(i => (<Tier2Resource index={i}/>))}
        </div>
    )
}

const tiers = [tier0, tier1, tier2];

export const EnergySection = (props: any) => {
    const [objArr, setObjArr] = useState<{instanceDescriptions: number}>({
        instanceDescriptions: 1
    });
    const onChange = (e: number) => {
        console.log(e);

        setObjArr({instanceDescriptions: e});
    }
    console.log("Return")
    console.log(props.checkedState);
    return (
        <div id={props.label}>
                <antd.Divider style={{ marginBottom: 60 }}>
                    {props.icon}  {props.label}
                </antd.Divider>
            <p>This section encompasses the energy spent to generate the AI soulution.</p>
            {/*<antd.Radio.Group onChange={props.onChange}>*/}
                 <Collapse bordered={false} defaultActiveKey={[]}>
                {props.children.map((child :any, i: number) => (

                         <Panel header={ <antd.Checkbox value={i} checked={props.checkedState[i]} onClick={(e: any) => props.onClickTier(props.label, e)}>{child.label}</antd.Checkbox>} key={`${i}`}>
                             <div>
                                 {tiers[i]({...props, ...objArr, setObjArr, alias: child.alias})}
                             </div>
                         </Panel>

                ))}
                 </Collapse>
            {/*</antd.Radio.Group>*/}
    {/*          <Collapse bordered={false} defaultActiveKey={['1']}>*/}
    {/*<Panel header="This is panel header 1" key="1">*/}
    {/*  {text}*/}
    {/*</Panel>*/}
    {/*                <antd.Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>*/}
    {/*                    <antd.Radio.Group onChange={props.onChange}>*/}
    {/*                        <antd.Radio value={0}>{props.children[0].label}</antd.Radio>*/}
    {/*                            <antd.Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>*/}
    {/*                                <antd.Form.Item label="Describe your use and application of the licensed work.">*/}
    {/*                                    <Input.TextArea rows={2} size="large"></Input.TextArea>*/}
    {/*                                </antd.Form.Item>*/}
    {/*                            </antd.Form>*/}
    {/*                        <antd.Radio value={1}>{props.children[1].label}</antd.Radio>*/}
    {/*                            <antd.Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>*/}
    {/*                                <antd.Form.Item label="Describe a means by which the public can access a harms model, literature review, or biases analysis pertaining to your application.">*/}
    {/*                                    <Input.TextArea rows={2} size="large"></Input.TextArea>*/}
    {/*                                </antd.Form.Item>*/}
    {/*                            </antd.Form>*/}
    {/*                        <antd.Radio value={2}>{props.children[2].label}</antd.Radio>*/}
    {/*                            <antd.Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>*/}
    {/*                                <antd.Form.Item label="Describe the nature of the evolution of your work from the licensed work.">*/}
    {/*                                    <Input.TextArea rows={2} size="large"></Input.TextArea>*/}
    {/*                                </antd.Form.Item>*/}
    {/*                            </antd.Form>*/}
    {/*                    </antd.Radio.Group>*/}
    {/*                </antd.Form>*/}
            </div>

    )
}