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
} from '../actions/types';

class AddTodoModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // REFERENCE (BUG FIX FOR AUTOFOCUSING TEXT INPUT ON MODAL IN REACT NATIVE)
  // https://stackoverflow.com/questions/42730400/focus-input-on-load-of-modal-in-react-native

  render() {

    // If the modal is current NOT visible,
    // render nothing <></>
    if (this.props.visible === false) {
      return(<></>);
    }

    return(
      <Modal 
        visible={this.props.visible}
        onShow={ () => { this.textInput.focus(); }}>

        <KeyboardAvoidingView style={{flex: 100, backgroundColor: 'white', justifyContent: 'flex-end'}}>

          <Icon 
            style={{position: 'absolute', top: 25, right: 25}}
            name="md-close" 
            size={50} 
            color="#000000" 
            onPress={ () => this.props.toggleModal() } />

          <TextInput 
            style={{}}
            ref={ (input) => { this.textInput = input; }}
            placeholder=" Enter Thing TODO Here"
            onChangeText={ (text) => console.log(text) }
            value={ null } />

          <PaperButton 
            mode="contained"
            style={{backgroundColor: "purple"}}
            onPress={ () => this.props.toggleModal() }>
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
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (payload) => dispatch({type: ADD_TODO, payload: payload}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTodoModal);