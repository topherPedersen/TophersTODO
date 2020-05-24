// Redux Action(s)
import { 
  SHOW_MODAL,
  CLOSE_MODAL,
} from '../actions/types';

const initialState = {
  showModal: false,
};

const modalReducer = (state, action) => {

  // check for state undefined to prevent 
  // redux from crashing app on load
  if (typeof state === 'undefined') {
    return {...initialState};
  }

  switch (action.type) {
    case 'SHOW_MODAL':
      const showModalState = {showModal: true};
      return showModalState;
    case 'CLOSE_MODAL':
      const closeModalState = {showModal: false};
      return closeModalState;
    default:
      return {...state};
  }

  // If none of the conditions above are true,
  // simply return a copy of the current state
  return {...state};
};

export default modalReducer;