import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import Title from '../components/Title';
import {
  scale,
  wScale,
  hScale,
} from '../utils';
import { fetchPokedex } from '../actions/ApiClient';
import {
  Text,
  Card,
} from '../components/Customs';

interface Props {

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

  _renderItem = ({ item }: any) => <Card {...item} />

  _keyExtractor = (item: any) => item.id.toString();

  render() {
    const { pokedexs } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
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