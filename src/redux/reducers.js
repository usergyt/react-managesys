import { combineReducers } from 'redux'

import Test from 'reducers/Test'
import menu from 'reducers/menu'
import auth from 'reducers/auth'
import userInfo from 'reducers/userInfo'


export default combineReducers({
  auth,
  Test,
  menu,
  userInfo
})