import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store/configureStore';
import ROUTES from './config/routes';
import THEME from './config/theme';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.flexCenterContent}>
          <ROUTES />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  flexCenterContent: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: THEME.$white,
  },
});

export default App;
