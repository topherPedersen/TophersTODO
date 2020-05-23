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
          <FAB 
            icon="plus"
            style={{position: 'absolute', margin: 0, right: 25, bottom: 75}}
            onPress={ () => alert("Add TODO") } />
        </SafeAreaView>
      </PaperProvider>
    );
  }
}

export default App;