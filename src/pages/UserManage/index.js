import React from 'react'
import { getUserInfo } from '@/redux/actions/userInfo'
import UserList from './userList'
import UserSearchInfoPageForm from './searchInfo'
require("./index.css")

 
/**
 * 用户列表
 * 
 * @export
 * @class UserInfoPage
 * @extends {React.Component}
 */
export default class UserInfoPage extends React.Component {
  constructor(props) {
    super(props)
  }


  componentWillReceiveProps(nextProps) {

  }
  componentDidMount() {

  }

  render() {

    return (
      <div>
        <UserSearchInfoPageForm />
        <div className="search-result-list">
          <UserList />
        </div>
      </div>
    );
  }
}


