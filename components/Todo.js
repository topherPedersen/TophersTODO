import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native';

class Todo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{alignContent: 'center'}}>
        <Text style={{fontSize: 16, height: 50}}>{this.props.task}</Text>
      </View>
    );
  }

}

export default Todo;