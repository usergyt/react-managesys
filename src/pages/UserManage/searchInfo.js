import React from 'react'
import { Form, Icon, Col, Row, Input, Button, Table, Select } from 'antd'
import api from '@/redux/api'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSearchInfo, getUserInfo } from '@/redux/actions/userInfo'
const FormItem = Form.Item


class userSearchInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      pagination: {},
      loading: false,
      bordered: true
    }
  }

  componentWillReceiveProps(nextProps) {

  }
  componentDidMount() {

  }
  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      loading: true
    })
    const data = this.props.form.getFieldsValue()
    this.props.updateSearchInfo(data)
    this.props.getUserInfo(data)
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    const userNameError = isFieldTouched('userName') && getFieldError('userName')
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 17, width: 100 }
    }
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit.bind(this)} className="ant-advanced-search-form">
          <Row gutter={40}>
            <Col span={5}  >
              <FormItem
                {...formItemLayout}
                label={'编码'}
                validateStatus={userNameError ? 'error' : ''}
                help={userNameError || ''}
              >
                {getFieldDecorator('accountCode', {
                  rules: [{ required: true, message: 'Please input your accountCode!' }]
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="编码" />
                )}
              </FormItem>
            </Col>
            <Col span={5}  >
              <FormItem
                {...formItemLayout}
                label={'账户名称'}
                validateStatus={userNameError ? 'error' : ''}
                help={userNameError || ''}
              >
                {getFieldDecorator('accountName', {
                  rules: [{ required: true, message: 'Please input your accountName!' }]
                })(
                  <Input prefix={<Icon type="accountName" style={{ fontSize: 13 }} />} placeholder="账户名称" />
                )}
              </FormItem>
            </Col>
            <Col span={5}  >
              <FormItem
                {...formItemLayout}
                label={'手机号'}
                validateStatus={userNameError ? 'error' : ''}
                help={userNameError || ''}
              >
                {getFieldDecorator('mobilePhone', {
                  rules: [{ required: true, message: 'Please input your mobilePhone!' }]
                })(
                  <Input prefix={<Icon type="mobilePhone" style={{ fontSize: 13 }} />} placeholder="手机号" />
                )}
              </FormItem>
            </Col>
            <Col span={5}  >
              <FormItem
                {...formItemLayout}
                label={'账户类型'}
                validateStatus={userNameError ? 'error' : ''}
                help={userNameError || ''}
              >
                {getFieldDecorator('accountType', {
                  rules: [{ required: true, message: 'Please input your accountType!' }]
                })(
                  <Select style={{ width: '150px' }} placeholder="账户类型" >
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                    <Option value="3">Option 3</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">搜索</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                清空
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}



const UserSearchInfoPageForm = Form.create()(userSearchInfo)
const mapStateToProps = (state) => {
  return { searchInfo: state.userInfo.searchInfo }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchInfo: bindActionCreators(updateSearchInfo, dispatch),
    getUserInfo: bindActionCreators(getUserInfo, dispatch)


  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserSearchInfoPageForm)

