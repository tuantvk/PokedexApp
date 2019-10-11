import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Text from './Text';
import {
  scale,
  wScale,
  hScale,
} from '../../utils';

export interface CardProps {
  name: string,
}

const Card = ({
  name,
}: CardProps) => (
    <View style={styles.card}>
      <Text>{name}</Text>
    </View>
  );

const styles = StyleSheet.create({
  card: {
    borderRadius: scale(10),
    width: wScale(122),
    height: hScale(100),
    backgroundColor: '#49d0b0',
    marginBottom: scale(10),
    flexDirection: 'column',
    marginRight: scale(10),
  }
});

export default Card;