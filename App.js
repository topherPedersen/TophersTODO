import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native';

// React-Native Paper
import { Provider as PaperProvider } from 'react-native-paper';

// Floating Action Button (FAB)
import { FAB } from 'react-native-paper';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [
        {id: "f00", task: "foo"},
        {id: "b@r", task: "bar"},
        {id: "b@z", task: "baz"},
      ],
    };
  }

  render() {

    return(
      <PaperProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>

          <View style={{position: 'absolute', top: "10%", backgroundColor: "white", width: "100%"}}>
            <Text style={{textAlign: 'center', fontSize: 20}}>Topher's TODO App</Text>
          </View>

          <View style={{alignSelf: 'center', marginTop: "40%", width: "100%", height: "100%", backgroundColor: "white"}}>

          </View>

          <View style={{position: 'absolute', bottom: "10%", backgroundColor: "white", width: "100%"}}>
            <FAB 
              label="Add TODO"
              icon="plus"
              style={{alignSelf: 'center', width: 175}}
              onPress={ () => alert("Add TODO") } />
          </View>

        </SafeAreaView>

      </PaperProvider>
    );
  }
}

export default App;