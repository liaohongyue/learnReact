import React, { useState } from 'react'
//import Button from 'antd/lib/button'
import { Alert, Button, DatePicker, message } from 'antd'
//import Button from "antd"
//import 'antd/dist/antd.css'



export default function AntdTest() {
    const [Date, setDate] = useState(null)
    const handleChange = (value) => {
        message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };

    return (
        <div>
            <Button type="primary">按钮1</Button>
            <DatePicker onChange={handleChange} ></DatePicker>
            <div>
                <Alert message="Now Date"  description={Date? Date.format('YYYY年MM月DD日'):'null'} />
            </div>
        </div>
    )
}
