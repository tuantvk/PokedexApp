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
    pokedexs: [
      {
        id: 1,
        num: "001",
        name: "Bulbasaur",
        img: "http://www.serebii.net/pokemongo/pokemon/001.png",
        type: [
          "Grass",
          "Poison"
        ],
        height: "0.71 m",
        weight: "6.9 kg",
        candy: "Bulbasaur Candy",
        candy_count: 25,
        egg: "2 km",
        spawn_chance: 0.69,
        avg_spawns: 69,
        spawn_time: "20:00",
        multipliers: [
          1.58
        ],
        weaknesses: [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ],
        next_evolution: [
          {
            num: "002",
            name: "Ivysaur"
          },
          {
            num: "003",
            name: "Venusaur"
          }
        ]
      },
      {
        id: 2,
        num: "002",
        name: "Ivysaur",
        img: "http://www.serebii.net/pokemongo/pokemon/002.png",
        type: [
          "Grass",
          "Poison"
        ],
        height: "0.99 m",
        weight: "13.0 kg",
        candy: "Bulbasaur Candy",
        candy_count: 100,
        egg: "Not in Eggs",
        spawn_chance: 0.042,
        avg_spawns: 4.2,
        spawn_time: "07:00",
        multipliers: [
          1.2,
          1.6
        ],
        weaknesses: [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ],
        prev_evolution: [
          {
            num: "001",
            name: "Bulbasaur"
          }
        ],
        next_evolution: [
          {
            num: "003",
            name: "Venusaur"
          }
        ]
      },
      {
        id: 3,
        num: "003",
        name: "Venusaur",
        img: "http://www.serebii.net/pokemongo/pokemon/003.png",
        type: [
          "Grass",
          "Poison"
        ],
        height: "2.01 m",
        weight: "100.0 kg",
        candy: "Bulbasaur Candy",
        egg: "Not in Eggs",
        spawn_chance: 0.017,
        avg_spawns: 1.7,
        spawn_time: "11:30",
        multipliers: null,
        weaknesses: [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ],
        prev_evolution: [
          {
            num: "001",
            name: "Bulbasaur"
          },
          {
            num: "002",
            name: "Ivysaur"
          }
        ]
      },
    ],
  }

  componentDidMount = async () => {
    // let pokedexs = await fetchPokedex();
    // this.setState({ pokedexs: pokedexs.data.pokemon });
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