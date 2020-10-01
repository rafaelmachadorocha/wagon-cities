export default function(state = null, action) {
  switch (action.type) {
    case 'CLICK_CITY':
      return action.payload;
    default:
      return state;
  }
}