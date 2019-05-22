
const INIT = {
  newMessage: ''
}

function conversation(state = INIT, action) {
  switch(action.type) {
    case 'SAVE_NEW_MESSAGE':
      return {...state, newMessage: action.payload}
    
    default:
      return state
  }

}

export default conversation