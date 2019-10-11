import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
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
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Header />
            <Title>Pokedex</Title>
            <View>

            </View>
          </View>
        </ScrollView>
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