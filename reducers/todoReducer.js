// Redux Action(s)
import { 
  ADD_TODO,
  MARK_COMPLETED,
} from '../actions/types';

const initialState = {
  todo: [],
};

const todoReducer = (state, action) => {

  // check for state undefined to prevent 
  // redux from crashing app on load
  if (typeof state === 'undefined') {
    return {...initialState};
  }

  switch (action.type) {
    case ADD_TODO:
      const addTodoState = {...state};
      const newTodo = action.payload;
      addTodoState.todo.push(newTodo);
      return addTodoState;
    case MARK_COMPLETED:
      const markCompletedState = {...state};
      const completedTodoID = action.payload;
      return {...state};
    default:
      return {...state};
  }

  // If none of the conditions above are true,
  // simply return a copy of the current state
  return {...state};
};

export default todoReducer;