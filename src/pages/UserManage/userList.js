import React from 'react'
import { Form, Icon, Col, Row, Input, Button, Table, Select } from 'antd'
import api from '@/redux/api'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PanelBox from '@/components/PanelBox'
import { getUserInfo } from '@/redux/actions/userInfo'
const columns = [
  {
    title: '编码',
    dataIndex: 'accountCode',
    sorter: true,
    render: name,
    // render: name => `${name.first} ${name.last}`,
    width: '10%'
  }, {
    title: '账号名称',
    dataIndex: 'accountName',
    width: '10%'
  }, {
    title: '邮箱',
    dataIndex: 'email'
  }, {
    title: '手机号',
    dataIndex: 'mobilePhone'
  }, {
    title: '账号类型',
    dataIndex: 'accountType'
  }, {
    title: '账号密码',
    dataIndex: 'accountPw'
  }, {
    title: '状态',
    dataIndex: 'statusId'
  }, {
    title: '问题',
    dataIndex: 'accountQuestion'
  }
]

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      pagination: {},
      loading: false,
      bordered: true
    }
  }
  handleTableChange = (pagination, filters, sorter) => {
    const pager = this.state.pagination
    pager.current = pagination.current

    this.setState({
      pagination: pager
    })
    this.props.getUserInfo(Object.assign(pager, this.props.searchInfo))

  }
  
  /* 查询列表 */
  fetch = (params = {}) => {
    this.setState({ loading: true })
    api.get('/randomuser', {
      params: {
        results: 10,
        ...params
      },
      responseType: 'json'
    }).then((data) => {
      data = data.data
      const pagination = this.state.pagination
      // Read total count from server
      // pagination.total = data.totalCount
      pagination.total = 200
      this.setState({
        loading: false,
        data: data.results,
        pagination
      })
    })
  }

  userList = () => {
    this.props.getUserInfo()
  }
  componentWillReceiveProps(nextProps) {
    // const { userListData} = nextProps

    // this.setState({
    //   loading: false,
    //   data: userListData.userInfo.dataList,
    //   pagination,
    // })

  }
  componentDidMount() {
    // this.fetch()
    this.userList()
  }

  render() {
    const pagination = this.state.pagination
    pagination.total = 200

    return (
      <div>
        <div className="search-result-list">
          <PanelBox title="用户列表">
            <Table
              {...this.state}
              columns={columns}
              rowKey="accountCode"
              dataSource={this.props.userListData.userInfo.accountInfos}
              pagination={this.state.pagination}
              loading={this.state.loading}
              onChange={this.handleTableChange}
            />
          </PanelBox>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    userListData: state.userInfo,
    searchInfo: state.userInfo.searchInfo
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    // getUserInfo: () => {
    //   dispatch(getUserInfo())
    // }
    getUserInfo: bindActionCreators(getUserInfo, dispatch)

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList)






