import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import {
  scale,
  wScale,
  hScale,
} from '../utils';

interface Props {

}

class Home extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.content}>
          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            <Header />
          </ScrollView>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: scale(25),
  }
});

export default Home;