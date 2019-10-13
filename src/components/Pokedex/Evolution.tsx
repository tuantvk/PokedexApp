import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Text } from '../Customs';
import Title from './Title';
import {
  scale, wScale, hScale,
} from '../../utils';
import { fetchPokedex } from '../../actions/ApiClient';
import _find from 'lodash/find';
import _isEmpty from 'lodash/isEmpty';
import _findIndex from 'lodash/findIndex';
import _concat from 'lodash/concat';
import _sortBy from 'lodash/sortBy';

interface ItemProps {
  img: string,
  name: string,
}

const ItemPokemon = ({
  img,
  name,
}: ItemProps) => (
    <View style={styles.item}>
      <Image
        source={{ uri: img }}
        style={styles.imgEvolution}
        resizeMode="stretch"
      />
      <Text>{name}</Text>
    </View>
  );

const Evolution = ({
  num,
  name,
  prev_evolution,
  next_evolution,
}: any) => {

  const [pokedexs, setPokedexs] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const req = await fetchPokedex();
      setPokedexs(req.data.pokemon);
    }

    fetchPokemon();
  }, []);

  const renderEvolution = (total: []) => {
    return total.map((p: any, id) => {
      let pokemon = _find(pokedexs, (x: any) => x.num === total[id]['num'])
      let nextPokemon = _find(pokedexs, (x: any) => {
        if (total[id + 1]) {
          return x.num === total[id + 1]['num']
        }
      });
      if (pokemon && nextPokemon) {
        return (
          <View style={styles.row} key={id}>
            <ItemPokemon
              name={pokemon.name}
              img={pokemon.img}
            />
            <View>
              <Text size="S" bold={true}>Lv.{num * 5}</Text>
            </View>
            <ItemPokemon
              name={nextPokemon.name}
              img={nextPokemon.img}
            />
          </View>
        )
      }
    });
  }

  const totalEvolution: any = _sortBy(_concat(
    prev_evolution,
    next_evolution,
    [{ num, name }],
  ), ['num']).filter(value => value);

  return (
    <View style={styles.container}>
      <Title name="Evolution Chain" />
      <View style={styles.content}>
        {renderEvolution(totalEvolution)}
        {renderEvolution(totalEvolution)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: scale(25),
    alignItems: 'center',
  },
  container: {
    marginVertical: scale(20),
  },
  content: {
    paddingRight: scale(45),
  },
  imgEvolution: {
    width: wScale(90),
    height: hScale(90),
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Evolution;
