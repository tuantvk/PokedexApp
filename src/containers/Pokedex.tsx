import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import {
  Text,
  ScrollView,
  Badge,
} from '../components/Customs';
import Header from '../components/Header';
import Title from '../components/Title';
import {
  scale,
  checkBgPokedex,
} from '../utils';
import { Colors } from '../constants';
import { NavigationStackProp } from 'react-navigation-stack';

const { height } = Dimensions.get('window');

interface PokedexProps {
  navigation: NavigationStackProp<{ pokedex: object }>;
}

const Pokedex = ({
  navigation,
}: PokedexProps) => {

  let pokedex = navigation.getParam('pokedex', '');

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView>
        <View
          style={{
            ...styles.header,
            backgroundColor: checkBgPokedex(pokedex.type),
          }}>
          <Header rightIcon="ios-heart-empty" color={Colors.white} />
          <Title color={Colors.white}>{pokedex.name}</Title>
          <Text bold={true} style={styles.num} color={Colors.white}>#{pokedex.num}</Text>
          <View style={styles.row}>
            {pokedex.type.map((t, i) => (
              <Badge key={i} style={styles.badge}>
                <Text color={Colors.white} size="S">{t}</Text>
              </Badge>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: scale(25),
    height: height / 2,
  },
  row: {
    flexDirection: 'row',
  },
  badge: {
    marginRight: scale(6),
    paddingHorizontal: scale(10),
    paddingVertical: scale(4),
  },
  num: {
    textAlign: 'right',
  }
});


export default Pokedex;