// Redux Action(s)
import { 
  ADD_TODO,
  MARK_COMPLETED,
  MARK_NOT_COMPLETED,
  REMOVE_TODO,
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
    case REMOVE_TODO:
      const removeTodoState = {...state};
      const removeTodoID = action.payload;
      // Filter out the TODO item which we wish to remove
      const removeTodoArray = removeTodoState.todo.filter( (todo) => {
        if (todo.id === removeTodoID) {
          return false; // return false to remove the item
        } else if (todo.id !== removeTodoID) {
          return true; // return true to keep all of the other items we wish to keep
        }
      });
      // Update the todo array in our state tree
      // with the new array of todo items which
      // does NOT include the item we just removed
      removeTodoState.todo = removeTodoArray;
      return removeTodoState;
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
      case MARK_NOT_COMPLETED:
        // Make copy of previous state
        const markNotCompletedState = {...state};
        // ID of task to be marked completed
        const notCompletedTodoID = action.payload;
        // Identify the completed todo item, and mark it complete
        const markNotCompletedTodoArray = markNotCompletedState.todo.map( (todo) => {
          if (todo.id !== notCompletedTodoID) {
            return todo;
          } else if (todo.id === notCompletedTodoID) {
            const markNotCompletedTodo = {
              task: todo.task,
              id: todo.id,
              completed: false,
            };
            return markNotCompletedTodo;
          }
        });
        markNotCompletedState.todo = markNotCompletedTodoArray;
        return markNotCompletedState;
    default:
      return {...state};
  }

  // If none of the conditions above are true,
  // simply return a copy of the current state
  return {...state};
};

export default todoReducer;