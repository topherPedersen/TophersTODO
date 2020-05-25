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

// Component(s)
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

const styles = StyleSheet.create({

});

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    /*
    this.state = {
      showModal: false,
      todo: [
        {id: "f00", task: "foo"},
        {id: "b@r", task: "bar"},
        {id: "b@z", task: "baz"},
        {id: "f00sd", task: "foo"},
        {id: "b@rddd", task: "bar"},
        {id: "b@dddddz", task: "baz"},
        {id: "f0sdfasdf0", task: "foo"},
        {id: "b@aaaar", task: "bar"},
        {id: "bdsfsd@z", task: "baz"},
        {id: "fccsd00", task: "foo"},
        {id: "b@asdfwecr", task: "bar"},
        {id: "b@sdfasdfwefz", task: "baz"},
        {id: "f0ddd0", task: "foo"},
        {id: "bxcvxc@r", task: "bar"},
        {id: "b@dsdfsdz", task: "baz"},
        {id: "fcc00", task: "foo"},
        {id: "bcc@r", task: "bar"},
        {id: "b@asdfeeeeeez", task: "baz"},
        {id: "f0jk,0", task: "foo"},
        {id: "byujk@r", task: "bar"},
        {id: "b@mmmz", task: "baz"},
        {id: "f0hmh0", task: "foo"},
        {id: "b@lskjdfr", task: "bar"},
        {id: "b@wecz", task: "baz"},
        {id: "f0sdfwe0", task: "foo"},
        {id: "b@xcsr", task: "bar"},
        {id: "b@ssz", task: "baz"},
        {id: "f0eaeeeqwq0", task: "foo"},
        {id: "b@eewesdsssr", task: "bar"},
        {id: "b@asdfeewsdfz", task: "baz"},
        {id: "faaaa00", task: "foo"},
        {id: "b@sddfr", task: "bar"},
        {id: "b@sdfsdfsdfeeesdfsaz", task: "baz"},
        {id: "f0wesdfs0", task: "foo"},
        {id: "b@asdfesdfr", task: "bar"},
        {id: "b@sdfwedsfdfsaasdfz", task: "baz"},
      ],
    };
    */

    /*
    this.state = {
      todo: [{id: "f0wesdfs0", task: "foo"}, {id: "f0wesdfsdfs0", task: "foo"}],
    };
    */
  }

  toggleModal() {
    /*
    // Get Previous State
    const showModalState = {...this.state};
    // Toggle Modal Visibility
    showModalState.showModal = !showModalState.showModal;
    // Update Local State
    this.setState(showModalState);
    */
  }

  // REFERENCE (CSS box-shadow in React-Native)
  // https://github.com/styled-components/styled-components/issues/709

  render() {

    // hex: #404040 (nice dark grey)
    // hex: #C0C0C0 (light grey)

    return(

      <>
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>

          <View style={{flex: 10, backgroundColor: "white", justifyContent: 'center', borderBottomWidth: 1, borderColor: "#E8E8E8", shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 7,}}>
            <Title style={{textAlign: 'center', fontSize: 18, color: "#404040"}}>Topher's TODO App</Title>
          </View>

          <View style={{alignSelf: 'center', flex: 90, width: "100%", backgroundColor: "white", justifyContent: 'center'}}>
            <TodoList />
          </View>

          <FAB 
            label="Add TODO"
            icon="plus"
            color="white"
            style={{position: 'absolute', bottom: "10%", alignSelf: 'center', width: 200, backgroundColor: "purple"}}
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