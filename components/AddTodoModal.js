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
  KeyboardAvoidingView,
} from 'react-native';

// React-Native Modal
import Modal from 'react-native-modal';

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

// React-Redux
import { 
  connect, 
} from 'react-redux';
// Redux Action(s)
import { 
  ADD_TODO,
  CLOSE_MODAL,
} from '../actions/types';

class AddTodoModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  handleTextInput(text) {
    this.setState({inputText: text});
  }

  // Method which is called when a user presses the "save" button
  // in order to add a new todo to the todo app
  handleAddTodo() {
    // Retrieve new todo item from local state
    const newTodo = this.state.inputText;

    // clear TextInput (local state)
    this.setState({inputText: ""});

    // Close Modal
    this.props.closeModal();

    // Add new todo to Redux Store
    this.props.addTodo({task: newTodo});
  }

  // REFERENCE (BUG FIX FOR AUTOFOCUSING TEXT INPUT ON MODAL IN REACT NATIVE)
  // https://stackoverflow.com/questions/42730400/focus-input-on-load-of-modal-in-react-native

  render() {

    // If the modal is current NOT visible, render nothing <></>
    if (this.props.visible === false) {
      return(<></>);
    }

    return(
      <Modal 
        visible={this.props.modal.showModal}
        onShow={ () => { this.textInput.focus(); }}>

        <KeyboardAvoidingView style={{flex: 100, backgroundColor: 'white', justifyContent: 'flex-end'}}>

          <Icon 
            style={{position: 'absolute', top: 25, right: 25}}
            name="md-close" 
            size={50} 
            color="#000000" 
            onPress={ () => this.props.closeModal() } />

          <TextInput 
            style={{}}
            ref={ (input) => { this.textInput = input; }}
            placeholder=" Enter Thing TODO Here"
            onChangeText={ (text) => this.handleTextInput(text) }
            value={ null } />

          <PaperButton 
            mode="contained"
            style={{backgroundColor: "purple"}}
            onPress={ () => this.handleAddTodo() }>
            Save
          </PaperButton>

        </KeyboardAvoidingView>

      </Modal>
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
    closeModal: () => dispatch({type: CLOSE_MODAL, payload: null}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTodoModal);