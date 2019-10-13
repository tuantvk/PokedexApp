import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Text,
} from '../Customs';
import { Colors } from '../../constants';
import { scale } from '../../utils';
import Title from './Title';

interface RowProps {
  title: string,
  content: string,
}

const Row = ({
  title,
  content
}: RowProps) => (
    <View style={styles.row}>
      <View style={styles.rowLeft}>
        <Text color={Colors.gray}>{title}</Text>
      </View>
      <View style={styles.rowRight}>
        <Text>{content}</Text>
      </View>
    </View>
  );

const About = (pokedex: any) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Row
        title="Species"
        content="Seed"
      />
      <Row
        title="Height"
        content={pokedex.height}
      />
      <Row
        title="Weight"
        content={pokedex.weight}
      />
      <Row
        title="Abilities"
        content="Overgrow, Chiorophyl"
      />
    </View>
    <Title name="Breeding" />
    <View style={styles.content}>
      <Row
        title="Gender"
        content="87%"
      />
      <Row
        title="Egg Groups"
        content="Monster"
      />
      <Row
        title="Egg Cycle"
        content="Grass"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: scale(10),
  },
  container: {
    marginVertical: scale(20),
  },
  content: {
    marginBottom: scale(10),
  },
  rowLeft: {
    width: '30%',
  },
  rowRight: {
    width: '70%',
  }
});

export default About
