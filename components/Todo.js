import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native';

// Import Lottie Animation Library
import LottieView from 'lottie-react-native';

// React-Redux
import { 
  connect, 
} from 'react-redux';
// Redux Action(s)
import { 
  ADD_TODO,
} from '../actions/types';

class Todo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{height: 100, flexDirection: 'row'}}>

        <LottieView style={{backgroundColor: 'white', height: 50, marginTop: 3, marginLeft: 10, alignSelf: 'center'}} source={require('../animations/attention.json')} loop={false} autoPlay/>

        <Text style={{fontSize: 18, alignSelf: 'center', marginLeft: 25, color: "#404040"}}>{this.props.task}</Text>

        <View style={{backgroundColor: 'pink', alignSelf: 'stretch', flex: 1, justifyContent: 'center'}}>
          <Text style={{alignSelf: 'flex-end'}}>X</Text>
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
    addTodo: (payload) => dispatch({type: ADD_TODO, payload: payload}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);