import { ADD_USER, DELETE_USER_BYID, GET_USER_BYID, GET_USERS, UPDATE_USER } from './action-type'

export function addUser (user) {
  console.log('action', user)
  return {
    type: ADD_USER,
    payload: user
  }
}

export function getUsers () {
  return {
    type: GET_USERS
  }
}

export function getUserById (id) {
  return {
    type: GET_USER_BYID,
    payload: id
  }
}

export function updateUser (user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export function deleteUserById (id) {
  return {
    type: DELETE_USER_BYID,
    payload: id
  }
}