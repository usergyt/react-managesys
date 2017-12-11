import { JIA, JIAN, CHONGZHI } from '../actions/Test'

/*
* 初始化state
 */

const initState = {
  count: 0
}
/*
* reducer
 */
export default function reducer(state = initState, action) {
  switch (action.type) {
    case JIA:
      return {
        count: state.count + 1
      }
    case JIAN:
      return {
        count: state.count - 1
      }
    case CHONGZHI:
      return { count: 0 }
    default:
      return state
  }
}
