import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native';

// React-Native Paper
import { Checkbox } from 'react-native-paper';

// Import Lottie Animation Library
import LottieView from 'lottie-react-native';

// React-Redux
import { 
  connect, 
} from 'react-redux';
// Redux Action(s)
import { 
  MARK_COMPLETED,
} from '../actions/types';

class Todo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handleCheckboxPressed() {
    const completed = this.props.completed;
    const id = this.props.id;
    // alert(id);
    if (!completed) {
      this.props.markCompleted(id);
    }
  }

  render() {

    // Trim the length of our todo item text if necessary
    let todoText;
    if (this.props.task.length >= 26) {
      todoText = this.props.task.substr(0, 25) + "...";
    } else {
      todoText = this.props.task;
    }

    return(

      <View style={{height: 100, flexDirection: 'row'}}>

        <LottieView style={{backgroundColor: 'white', height: 50, marginTop: 3, marginLeft: 10, alignSelf: 'center'}} source={ this.props.completed ? require('../animations/checkmark.json') : require('../animations/attention.json')} loop={false} autoPlay/>

        <Text style={{fontSize: 15, alignSelf: 'center', marginLeft: 25, color: "#404040"}}>{todoText}</Text>

        <View style={{backgroundColor: 'white', alignSelf: 'stretch', flex: 1, flexDirection: 'row-reverse', alignItems: 'center', marginLeft: 30}}>
          <Checkbox 
            style={{marginRight: 25}}
            status={this.props.completed ? 'checked' : 'unchecked'}
            onPress={ () => this.handleCheckboxPressed() } />
        </View>

      </View>
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
    markCompleted: (payload) => dispatch({type: MARK_COMPLETED, payload: payload}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);