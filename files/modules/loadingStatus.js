const CHANGE = '.../loadingStatus/CHANGE'

export default function loadingStatus (state = false, action) {
  switch (action.type) {
    case CHANGE:
      return state = action.status
    default:
      return state
  }
}

export function changeLoadingStatus (status) {
  return {
    type: CHANGE,
    status
  }
}
