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

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <PaperProvider>
        <SafeAreaView>
          <Text>Topher's TODO List App</Text>
        </SafeAreaView>
      </PaperProvider>
    );
  }
}

export default App;