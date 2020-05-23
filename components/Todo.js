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
      <View style={{height: 100, flexDirection: 'row'}}>
        <Text style={{fontSize: 16, alignSelf: 'center', color: "#404040"}}>{this.props.task}</Text>
      </View>
    );
  }

}

export default Todo;