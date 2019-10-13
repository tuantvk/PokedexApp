import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Text,
} from '../Customs';
import { Colors } from '../../constants';
import { scale, hScale } from '../../utils';
import Title from './Title';

interface RowProps {
  title: string,
  value: number,
  color?: string,
}

const Row = ({
  title,
  value,
  color,
}: RowProps) => (
    <View style={styles.row}>
      <View style={styles.rowLeft}>
        <Text color={Colors.gray}>{title}</Text>
      </View>
      <View style={styles.rowRight}>
        <Text bold={true}>{value}</Text>
        <View style={styles.line}>
          <View
            style={[
              styles.lineView,
              {
                width: `${value}%`,
                backgroundColor: color || Colors.pokedex_green,
              }
            ]}
          />
        </View>
      </View>
    </View>
  );

const BaseStats = (pokedex: any) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Row
        title="HP"
        value={45}
        color={Colors.pokedex_red}
      />
      <Row
        title="Attack"
        value={60}
      />
      <Row
        title="Defense"
        value={48}
        color={Colors.pokedex_red}
      />
      <Row
        title="Sp.Atk"
        value={65}
      />
      <Row
        title="Sp.Def"
        value={65}
      />
      <Row
        title="Speed"
        value={45}
        color={Colors.pokedex_red}
      />
      <Row
        title="Total"
        value={55}
      />
    </View>
    <Title name="Type defenses" />
    <View style={styles.content}>
      <Text color={Colors.gray}>The effectiveness of each type on Charmander</Text>
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
    width: '25%',
  },
  rowRight: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: '75%',
    height: hScale(3),
    backgroundColor: Colors.gray_light,
    borderRadius: 2,
    marginLeft: scale(15),
  },
  lineView: {
    height: '100%',
  }
});

export default BaseStats