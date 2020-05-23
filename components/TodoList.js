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

// Component(s)
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <FlatList
        ItemSeparatorComponent={ () => (
          <Divider />
        )}
        style={{alignContent: 'center'}}
        data={this.props.todo}
        keyExtractor={ item => item.id }
        renderItem={ ({item}) => 
          <Todo task={item.task} />
        }/>
    );
  }
}

export default TodoList;