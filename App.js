import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Button,
  Platform,
  Dimensions,
  TextInput,
  Keyboard,
} from 'react-native';

// React-Native Paper
import { 
  Provider as PaperProvider,
  Divider,
  Title,
  Button as PaperButton,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

// Floating Action Button (FAB)
import { FAB } from 'react-native-paper';

// Component(s)
import TodoApp from './components/TodoApp';

// React-Redux
import { 
  createStore,
  combineReducers,
} from 'redux';
import { 
  connect, 
  Provider 
} from 'react-redux';

import todoReducer from './reducers/todoReducer';
import modalReducer from './reducers/modalReducer';

// Intialize Redux Store
const rootReducer = combineReducers({
  todos: todoReducer,
  modal: modalReducer,
});
const store = createStore(rootReducer);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return(
      <Provider store={store}>
        <PaperProvider>
          <TodoApp />
        </PaperProvider>
      </Provider>
    );
  }
}

export default App;