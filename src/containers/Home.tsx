import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
import {
  scale,
} from '../utils';
import { fetchPokedex } from '../actions/ApiClient';
import {
  Card,
  ScrollView,
} from '../components/Customs';
import { POKEDEX } from '../routes';
import {
  NavigationParams,
  NavigationScreenProp,
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationParams>;
}

class Home extends Component<Props> {
  state = {
    pokedexs: [],
  }

  componentDidMount = async () => {
    let pokedexs = await fetchPokedex();
    try {
      let cut = pokedexs.data.pokemon.slice(0, 30);
      this.setState({ pokedexs: cut });
    } catch (err) {

    }
  };

  _openPokedexDetail = (pokedex: object) => {
    this.props.navigation.navigate(POKEDEX.routeName, {
      pokedex
    });
  }

  _renderItem = ({ item }: any) => (
    <TouchableOpacity activeOpacity={.95} onPress={() => this._openPokedexDetail(item)}>
      <Card {...item} />
    </TouchableOpacity>
  );

  _keyExtractor = (item: any) => item.id.toString();

  render() {
    const { pokedexs } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.content}>
            <Header />
            <Title style={styles.title}>Pokedex</Title>
            <View style={styles.pokedex}>
              <FlatList
                data={pokedexs}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                extraData={this.state}
                numColumns={2}
                initialNumToRender={10}
                removeClippedSubviews={true}
              />
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
  },
  pokedex: {
    flex: 1,
    marginVertical: scale(20),
  },
  title: {
    marginVertical: scale(8),
  }
});

export default Home;