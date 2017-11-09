import React, {Component} from 'react';
import {jia, jian, chongzhi} from 'actions/Test';
import { Button } from 'antd';
import {connect} from 'react-redux';
import PanelBox from '@/components/PanelBox';

class Test extends Component {
    render() {
        return (
            <PanelBox title="test Page">
                 <div>当前计数为{ this.props.Test.count}</div>
                <Button type="primary" >Button </Button>
                <Button type="primary" onClick={() => this.props.jia()}>加
                </Button>
                <Button type="primary" onClick={() => this.props.jian()}>减
                </Button>
                <Button type="primary" onClick={() => this.props.chongzhi()}>重置
                </Button>
             </PanelBox>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Test: state.Test
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        jia: () => {
            dispatch(jia())
        },
        jian: () => {
            dispatch(jian())
        },
        chongzhi: () => {
            dispatch(chongzhi())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);