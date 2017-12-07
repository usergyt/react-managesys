import _ from 'lodash';

import {
    GET_ALL_MENU,
    GET_ALL_MENU_SUCCESS,
    UPDATE_NAVPATH
} from '../actions/menu';

const initialState = {
  items: [],
  navpath: [],
  isLoading: false,
  userInfo: {},
  errorMsg: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_MENU:
            return {
                ...state,
                isLoading: true,
                userInfo: {},
                errorMsg: ''
            };
        case GET_ALL_MENU_SUCCESS:
        return Object.assign({}, initialState, {items: action.result.data});
        case UPDATE_NAVPATH:
             return {
                ...state,
                isLoading: false,
                userInfo: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}