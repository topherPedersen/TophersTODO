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

// Import AsyncStorage + Redux-Persist
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import todoReducer from './reducers/todoReducer';
import modalReducer from './reducers/modalReducer';

// Intialize Redux Store
const rootReducer = combineReducers({
  todos: todoReducer,
  modal: modalReducer,
});

// Redux-Persist Configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todos', 'modal'],
  stateReconciler: hardSet,
};

// *** COMMENTED OUT OLD 'store' IN FAVOR OF NEW REDUX-PERSIST STORE
//     DELETE AFTER REDUX-PERSIST IS UP AND RUNNING
// const store = createStore(rootReducer);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <TodoApp />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;