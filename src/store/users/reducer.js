import { ADD_USER, GET_USER_BYID, GET_USERS } from './action-type'

const initState = {
  users: [
    {id: 1, name: 'zhangsan', age: 20, gender: 'man'}
  ]
}

export function user (state = initState, action) {
  console.log('payload', action)
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload]
      }
    case GET_USERS:
      return [...state]
    case GET_USER_BYID:
      return state.filter(({id}) => id === action.id)[0]
    default:
      return state
  }
}