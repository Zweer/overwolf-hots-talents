import { CLOSE_NOTIFICATION } from '../constants';

const initialState = {
  isClosed: true,
  notes: []
}

export default function update(state = initialState, action) {
  if(action.type === CLOSE_NOTIFICATION) {
    return { 
      isClosed: true 
    }
  }
  return state;
}
