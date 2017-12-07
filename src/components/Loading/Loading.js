import React, {Component} from 'react';
import { Spin } from 'antd';

export default class Loading extends Component {
    render() {
        return (
            <div className="content">
            <Spin tip="加载中..." size='large' />
            </div>
         )
    }
}