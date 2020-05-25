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
  StyleSheet,
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

// Components
import TodoList from './TodoList';
import AddTodoModal from './AddTodoModal';

// React-Redux
import { 
  connect, 
} from 'react-redux';
// Redux Action(s)
import { 
  ADD_TODO,
  SHOW_MODAL,
} from '../actions/types';

// CSS
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1, 
    backgroundColor: "white",
  },
  titleWrapper: {
    flex: 10, 
    backgroundColor: "white", 
    justifyContent: 'center', 
    borderBottomWidth: 1, 
    borderColor: "#E8E8E8", 
    // REFERENCE (CSS box-shadow in React-Native)
    // https://github.com/styled-components/styled-components/issues/709
    shadowColor: '#000', 
    shadowOffset: { 
      width: 0, 
      height: 2 
    }, 
    shadowOpacity: 0.8, 
    shadowRadius: 2, 
    elevation: 7,
  },
  title: {
    textAlign: 'center', 
    fontSize: 18, 
    color: "#404040"
  },
  todoListWrapper: {
    alignSelf: 'center', 
    flex: 90, 
    width: "100%", 
    backgroundColor: "white", 
    justifyContent: 'center'
  },
  fab: {
    position: 'absolute', 
    bottom: "10%", 
    alignSelf: 'center', 
    width: 200, 
    backgroundColor: "purple"
  },
});

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <>
        <SafeAreaView style={styles.safeAreaView}>

          <View style={styles.titleWrapper}>
            <Title style={styles.title}>Topher's TODO App</Title>
          </View>

          <View style={styles.todoListWrapper}>
            <TodoList />
          </View>

          <FAB 
            label="Add TODO"
            icon="plus"
            color="white"
            style={styles.fab}
            onPress={ () => this.props.showModal() } />

        </SafeAreaView>

        <AddTodoModal />
      </>
    );
  }
}

// Connect Redux Store, and Redux Action(s)
const mapStateToProps = (state) => {
  return { 
    todos: state.todo,
    modal: state.modal,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (payload) => dispatch({type: ADD_TODO, payload: payload}),
    showModal: () => dispatch({type: SHOW_MODAL, payload: null}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);