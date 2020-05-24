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
    case 'ADD_TODO':
      const addTodoState = {...state};
      const newTodo = action.payload;
      addTodoState.todo.push(newTodo);
      return addTodoState;
    default:
      return {...state};
  }

  // If none of the conditions above are true,
  // simply return a copy of the current state
  return {...state};
};

export default todoReducer;