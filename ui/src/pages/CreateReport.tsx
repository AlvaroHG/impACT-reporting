import * as antd from 'antd';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

render(
    <div>
        <antd.Checkbox onChange={onChange}>Checkbox 1</antd.Checkbox>
        <antd.Checkbox onChange={onChange}>Checkbox 2</antd.Checkbox>
    </div>
);