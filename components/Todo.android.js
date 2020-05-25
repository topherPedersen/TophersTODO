import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

// React-Native Vector Icons
import Icon from 'react-native-vector-icons/Ionicons';

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
  MARK_NOT_COMPLETED,
  REMOVE_TODO,
} from '../actions/types';

// CSS
const styles = StyleSheet.create({
  parentView: {
    height: 100, 
    flexDirection: 'row',
  },
  iconCheckboxWrapper: {
    backgroundColor: 'white', 
    alignSelf: 'stretch', 
    flex: 1, 
    flexDirection: 'row-reverse', 
    alignItems: 'center', 
    marginLeft: 20,
  },
  icon: {
    marginLeft: 10, 
    marginTop: 2, 
    color: "grey",
  },
});

class Todo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  // MARK_COMPLETED or MARK_NOT_COMPLETED
  handleCheckboxPressed() {
    const completed = this.props.completed;
    const id = this.props.id;
    if (!completed) {
      this.props.markCompleted(id);
    } else if (completed) {
      this.props.markNotCompleted(id);
    }
  }

  // REMOVE_TODO
  handleRemoveIconPressed() {
    const id = this.props.id;
    this.props.removeTodo(id);
  }

  render() {

    // Trim the length of our todo item text if necessary
    let todoText;
    if (this.props.task.length >= 21) {
      todoText = this.props.task.substr(0, 20) + "...";
    } else {
      todoText = this.props.task;
    }

    return(

      <View style={styles.parentView}>

        {/* Leave inline styling for LottieView as the styling is dependent upon access to props */}
        <LottieView style={{backgroundColor: 'white', height: 50, marginTop: 3, marginLeft: 10, alignSelf: 'center'}} source={ this.props.completed ? require('../animations/checkmark.json') : require('../animations/attention.json')} loop={false} autoPlay/>

        {/* Leave inline styling for TODO Text as the styling is dependent upon access to props */}
        <Text style={{fontSize: 15, alignSelf: 'center', marginLeft: 25, color: "#404040", textDecorationLine: this.props.completed ? 'line-through' : 'none'}}>{todoText}</Text>

        <View style={styles.iconCheckboxWrapper}>

          <Icon 
              style={styles.icon}
              name="md-close" 
              size={27} 
              color="#000000" 
              onPress={ () => this.handleRemoveIconPressed() } />

          <Checkbox 
            color="purple"
            uncheckedColor="grey"
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
    markNotCompleted: (payload) => dispatch({type: MARK_NOT_COMPLETED, payload: payload}),
    removeTodo: (payload) => dispatch({type: REMOVE_TODO, payload: payload}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);