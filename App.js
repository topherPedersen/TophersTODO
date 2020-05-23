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
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

    /*
    this.state = {
      todo: [{id: "f0wesdfs0", task: "foo"}, {id: "f0wesdfsdfs0", task: "foo"}],
    };
    */
  }

  render() {

    // hex: #404040 (nice dark grey)
    // hex: #C0C0C0 (light grey)

    return(
      <PaperProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>

          <View style={{flex: 10, backgroundColor: "white", justifyContent: 'center', borderBottomWidth: 1, borderColor: "#E8E8E8"}}>
            <Text style={{textAlign: 'center', fontSize: 18, color: "#404040"}}>Topher's TODO App</Text>
          </View>

          <View style={{alignSelf: 'center', flex: 90, width: "100%", backgroundColor: "white"}}>
            <TodoList todo={this.state.todo} />
          </View>

          <FAB 
            label="Add TODO"
            icon="plus"
            color="white"
            style={{position: 'absolute', bottom: "10%", alignSelf: 'center', width: 200, backgroundColor: "purple"}}
            onPress={ () => alert("Add TODO") } />

        </SafeAreaView>

      </PaperProvider>
    );
  }
}

export default App;