import { Gauge } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from "antd";

const DemoGauge = () => {
    const config = {
        width: 720,
        height: 720,
        autoFit: true,
        data: {
            target: 159,
            total: 400,
            name: 'score',
            thresholds: [100, 200, 400],
        },
        legend: false,
        scale: {
            color: {
                range: ['#F4664A', '#FAAD14', 'green'],
            },
        },
        style: {
            textContent: (target, total) => `得分：${target}\n占比：${(target / total) * 100}%`,
        },
    };
    return (
        <Card title="Gauge Chart" style={{ width: '100%' }}>
            <Gauge {...config}
                containerStyle={{width: '100%', height: '40vh'}}
            />
        </Card>
        )

};

export default DemoGauge;