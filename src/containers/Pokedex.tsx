import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
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
  wScale,
  hScale,
} from '../utils';
import { Colors } from '../constants';
import { NavigationStackProp } from 'react-navigation-stack';
import { TabView, SceneMap } from 'react-native-tab-view';

const { height, width } = Dimensions.get('window');

interface PokedexProps {
  navigation: NavigationStackProp<{ pokedex: object }>;
}

interface PokedexState {
  navigationState: { index: number, routes: any[] },
}

const Pokedex = ({
  navigation,
}: PokedexProps, PokedexState) => {

  const [index, setIndex] = useState(0);
  const [navigationState, setNavigationState] = useState();

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
        <View style={styles.content}>
          <View style={styles.img}>
            <Image
              source={{ uri: pokedex.img }}
              style={styles.imgPokedex}
              resizeMode="stretch"
            />
          </View>
          <TabView
            navigationState={navigationState}
            renderScene={SceneMap({
              first: () => <View />,
              second: () => <View />,
            })}
            onIndexChange={index => setIndex(index)}
            initialLayout={{ width }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    padding: scale(25),
    height: height / 2,
    position: 'relative',
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
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: scale(-155),
    zIndex: 99,
    left: 0,
    right: 0,
  },
  imgPokedex: {
    width: wScale(200),
    height: hScale(200),
  },
  content: {
    backgroundColor: Colors.white,
    height: height / 1.5,
    borderTopLeftRadius: scale(25),
    borderTopRightRadius: scale(25),
    top: - scale(25),
    zIndex: 1,
  }
});


export default Pokedex;