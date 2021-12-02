import {
  FETCH_USER_REQUEST, FETCH_USER_ERROR,
  FETCH_USER_REGISTER_SUCCESS, FETCH_USER_SIGN_IN_SUCCESS,
  FETCH_USER_SIGN_OUT_SUCCESS, FETCH_USER_UPDATE_SUCCESS,
  FETCH_USER_AVATAR_SUCCESS, FETCH_ALL_AVATAR_SUCCESS,
  FETCH_USER_PROFILE_SUCCESS
} from "./types";

const initialState = {
  loading: false,
  user: {},
  error: '',
  avatar: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case FETCH_USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user.user,
      }
    case FETCH_USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user.user,
      }
    case FETCH_USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user.user,
      }
    case FETCH_USER_SIGN_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {},
      }
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user.user,
      }
    case FETCH_USER_AVATAR_SUCCESS:
      return {
        ...state,
        loading: false,
        avatar: action.avatar
      }
    case FETCH_ALL_AVATAR_SUCCESS:
      return {
        ...state,
        loading: false,
        avatars: action.avatars
      }
    default:
      return state;
  }
}

export default userReducer