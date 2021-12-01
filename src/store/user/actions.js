import {
  FETCH_USER_REQUEST, FETCH_USER_ERROR,
  FETCH_USER_REGISTER_SUCCESS, FETCH_USER_SIGN_IN_SUCCESS,
  FETCH_USER_SIGN_OUT_SUCCESS, FETCH_USER_UPDATE_SUCCESS,
  FETCH_ALL_AVATAR_SUCCESS
} from "./style";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}
export const fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    error
  }
}
export const fetchUserRegisterSuccess = (user) => {
  return {
    type: FETCH_USER_REGISTER_SUCCESS,
    user
  }
}
export const fetchUserSignInSuccess = (user) => {
  return {
    type: FETCH_USER_SIGN_IN_SUCCESS,
    user
  }
}
export const fetchUserUpdateSuccess = (user) => {
  return {
    type: FETCH_USER_UPDATE_SUCCESS,
    user
  }
}
export const fetchUserSignOutSuccess = () => {
  return {
    type: FETCH_USER_SIGN_OUT_SUCCESS,
  }
}
export const fetchAllAvatarSuccess = (avatars) => {
  return {
    type: FETCH_ALL_AVATAR_SUCCESS,
    avatars
  }
}
