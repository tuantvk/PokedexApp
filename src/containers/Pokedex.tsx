import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  ActivityIndicator,
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
import {
  TabView,
  SceneMap,
  TabBar,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import {
  About,
  BaseStats,
  Evolution,
  Moves,
} from '../components/Pokedex';
import _isEmpty from 'lodash/isEmpty';

const { height, width } = Dimensions.get('window');

type Route = {
  key: string;
  title: string;
};

type State = NavigationState<Route>;

interface PokedexProps {
  navigation: NavigationStackProp<{ pokedex: object }>;
}

interface PokedexState {
  index: number,
  pokedex: any,
}

class Pokedex extends Component<PokedexProps, PokedexState, State> {
  state = {
    index: 0,
    pokedex: null,
    routes: [
      { key: 'about', title: 'About' },
      { key: 'baseStats', title: 'Base Stats' },
      { key: 'evolution', title: 'Evolution' },
      { key: 'moves', title: 'Moves' },
    ],
  }

  componentDidMount = () => {
    const { navigation } = this.props;
    let pokedex = navigation.getParam('pokedex', '');
    this.setState({ pokedex });
  }

  _onIndexChange = (index: number) => this.setState({ index });

  private renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        renderLabel={({ route, focused }) => (
          <Text size="S" bold={focused}>
            {route.title}
          </Text>
        )}
      />
    );
  };

  render() {
    const { pokedex, index, routes } = this.state;
    const navigationState = { index, routes };

    if (_isEmpty(pokedex)) {
      return (
        <ActivityIndicator />
      )
    }
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
            <Title size="XXL" color={Colors.white}>{pokedex.name}</Title>
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
                about: () => <About {...pokedex} />,
                baseStats: () => <BaseStats {...pokedex} />,
                evolution: () => <Evolution {...pokedex} />,
                moves: () => <Moves {...pokedex} />,
              })}
              renderTabBar={this.renderTabBar}
              onIndexChange={this._onIndexChange}
              initialLayout={{ width: width - 20 }}
              style={styles.tabview}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
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
    top: scale(-140),
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
  },
  tabbar: {
    backgroundColor: Colors.white,
    elevation: 0,
  },
  indicator: {
    backgroundColor: Colors.black,
  },
  tabview: {
    padding: scale(20),
    marginTop: scale(15),
  },
});


export default Pokedex;