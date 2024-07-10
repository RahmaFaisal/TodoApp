import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Screens from './app/screens';
import {store} from './app/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={Styles.backgroundStyle}>
      <Provider store={store}>
        <Screens />
      </Provider>
    </SafeAreaView>
  );
}

export default App;

const Styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#f2e0ce',
  },
});
