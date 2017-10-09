const USER_LOGGED_IN = 'app/user/USER_LOGGED_IN'
const USER_LOGGED_OUT = 'app/user/USER_LOGGED_OUT'

const initialState = {
  avatar: null,
  isAuthenticated: false,
  name: null,
  points: null,
  rank_group: null,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        isAuthenticated: true,

        // spread over payload, instead of manually adding each key
        ...action.payload,
      }

    case USER_LOGGED_OUT:
      return initialState

    default:
      return state
  }
}

export function fakeLogin() {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: USER_LOGGED_IN,
        payload: {
          avatar: '//placecage.com/200/200',
          name: 'UserName',
          points: 1337,
          rank_group: 5,
        },
      })
    }, 2000) // fake db delay
  }
}

export function logout() {
  return {
    type: USER_LOGGED_OUT,
  }
}
