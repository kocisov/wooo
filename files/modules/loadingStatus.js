const CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS'

export function changeLoading (status) {
  return {
    type: CHANGE_LOADING_STATUS,
    status
  }
}

export default function loadingStatus (state, action) {
  switch (action.type) {
    case CHANGE_LOADING_STATUS:
      return state = action.status
    case default:
      return state
  }
}