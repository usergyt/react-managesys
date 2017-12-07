import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL,UPDATE_SEARCH_INFO} from 'actions/userInfo';


const initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: '',
    searchInfo:{}
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                userInfo: {},
                errorMsg: ''
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userInfo: action.result.data,
                errorMsg: ''
            };
        case GET_USER_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                userInfo: {},
                errorMsg: '请求错误'
            };
        case UPDATE_SEARCH_INFO:
             return {
                ...state,
                 searchInfo: action.value,
             };
        default:
            return state;
    }
}