import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
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
        <SafeAreaView style={{flex: 1, backgroundColor: "red"}}>
          <Text>Topher's TODO List App</Text>
          <FAB 
            icon="plus"
            label="Add TODO"
            style={{position: 'absolute', margin: 16, right: 0, bottom: 0}}
            onPress={ () => alert("Add TODO") } />
        </SafeAreaView>
      </PaperProvider>
    );
  }
}

export default App;