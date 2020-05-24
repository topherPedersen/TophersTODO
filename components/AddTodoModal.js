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

class AddTodoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closeModal: false,
    };
  }

  closeModal() {
    this.setState({closeModal: true});
  }


  render() {

    let shouldDisplayModal;
    if (this.state.closeModal !== true && this.props.visible === true) {
      shouldDisplayModal = true;
    } else {
      shouldDisplayModal = false;
    }

    return(
      <Modal visible={shouldDisplayModal}>

        <View style={{flex: 100, backgroundColor: 'white', justifyContent: 'flex-end'}}>

          <Icon 
            style={{position: 'absolute', top: 25, right: 25}}
            name="md-close" 
            size={50} 
            color="#000000" 
            onPress={ () => this.closeModal() } />

          <TextInput 
            style={{}}
            placeholder=" Enter Thing TODO Here"
            autoFocus={true}
            onChangeText={ (text) => console.log(text) }
            value={ null } />

          <PaperButton 
            mode="contained"
            onPress={ () => this.closeModal() }>
            Save
          </PaperButton>

        </View>

      </Modal>
    );
  }
}

export default AddTodoModal;