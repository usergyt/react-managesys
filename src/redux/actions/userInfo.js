export const GET_USER_INFO_REQUEST = 'userInfo/GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'userInfo/GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAIL = 'userInfo/GET_USER_INFO_FAIL'
export const UPDATE_SEARCH_INFO = 'userInfo/UPDATE_SEARCH_INFO'


export function updateSearchInfo(item) {
  return {
    type: UPDATE_SEARCH_INFO,
    value: item
  }
}


export function getUserInfo(item) {
  console.log(item)
  return {
    types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
    promise: client => client.get('/operation-platform/accountInfo', item)
  }
}