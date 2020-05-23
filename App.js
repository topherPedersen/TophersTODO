import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

// React-Native Paper
import { Provider as PaperProvider } from 'react-native-paper';

// Floating Action Button (FAB)
import { FAB } from 'react-native-paper';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <PaperProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>

          <Text>Topher's TODO List App</Text>

          <View style={{position: 'absolute', bottom: 100, backgroundColor: "white", width: "100%"}}>
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