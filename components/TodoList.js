import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native';

// React-Native Paper
import { 
  Provider as PaperProvider,
  Divider,
} from 'react-native-paper';

// Floating Action Button (FAB)
import { FAB } from 'react-native-paper';

// Import Lottie Animation Library
import LottieView from 'lottie-react-native';

// Component(s)
import Todo from './Todo';

// React-Redux
import { 
  connect, 
} from 'react-redux';
// Redux Action(s)
import { 
  ADD_TODO,
} from '../actions/types';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    // If the todo-list is empty, display a placeholder (checklist animation)
    if (this.props.todos.todo.length === 0) {
      return(
        <>
        <LottieView style={{backgroundColor: 'white', width: "150%", marginTop: "-5%", marginLeft: "5%", alignSelf: 'center'}} source={require('../animations/checklist.json')} loop={false} autoPlay/>
        </>
      );
    }

    // If the todo-list is NOT empty, display the todos in a FlatList
    return(
      <FlatList
        ItemSeparatorComponent={ () => (
          <Divider />
        )}
        style={{alignContent: 'center'}}
        data={this.props.todos.todo}
        keyExtractor={ item => item.id }
        renderItem={ ({item}) => 
          <Todo 
            task={item.task} 
            id={item.id} 
            completed={item.completed} />
        }/>
    );
  }
}

// Connect Redux Store, and Redux Action(s)
const mapStateToProps = (state) => {
  return { 
    todos: state.todos,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (payload) => dispatch({type: ADD_TODO, payload: payload}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);