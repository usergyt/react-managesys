import api from '../api'

export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING'
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'

export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export function fetchProfile() {
  let uid = window.localStorage.getItem('uid')

  if (uid === undefined) {
    return { type: 'UID_NOT_FOUND' }
  }

  return {
    type: 'FETCH_PROFILE',
    payload: {
      promise: api.get('/my')
    }
  }
}

export function login(name, password) {

  return {
    types: [LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR],
    promise: client => api.put('/login', {
      data: {
        name: name,
        password: password
      }
    })
  }
}

export function logout() {

  return {
    type: 'LOGOUT',
    payload: {
      promise: api.get('/logout')
    }
  }
}
