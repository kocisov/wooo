const CHANGE = '.../user/CHANGE'

export default function user (state = {
  name: 'Koci',
  avatar: '//placecage.com/200/200',
  rank_group: 5,
  points: 1341
}, action) {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}
