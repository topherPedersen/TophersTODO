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
      // Make copy of previous state
      const markCompletedState = {...state};
      // ID of task to be marked completed
      const completedTodoID = action.payload;
      // Identify the completed todo item, and mark it complete
      const updatedTodoArray = markCompletedState.todo.map( (todo) => {
        if (todo.id !== completedTodoID) {
          return todo;
        } else if (todo.id === completedTodoID) {
          const updatedTodo = {
            task: todo.task,
            id: todo.id,
            completed: true,
          };
          return updatedTodo;
        }
      });
      markCompletedState.todo = updatedTodoArray;
      return markCompletedState;
    default:
      return {...state};
  }

  // If none of the conditions above are true,
  // simply return a copy of the current state
  return {...state};
};

export default todoReducer;