import React from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import Text from './Text';
import {
  scale,
  wScale,
  hScale,
  checkBgPokedex,
} from '../../utils';
import { Colors } from '../../constants';
import Badge from './Badge';

export interface CardProps {
  name: string;
  type?: any[];
  img?: string;
}

const Card = ({
  name,
  type,
  img,
  ...rest
}: CardProps) => (
    <View
      style={{
        ...styles.card,
        backgroundColor: checkBgPokedex(type || []),
      }}>
      <Text
        color={Colors.white}
        style={styles.name}
        bold={true}
      >
        {name}
      </Text>
      {type && type.map((t, index) => (
        <Badge>
          <Text color={Colors.white} size="S" key={index}>{t}</Text>
        </Badge>
      ))}
      <Image
        source={{ uri: img }}
        resizeMode="stretch"
        style={styles.img}
      />
    </View>
  );

const styles = StyleSheet.create({
  card: {
    borderRadius: scale(11),
    width: wScale(122),
    height: hScale(100),
    marginBottom: scale(10),
    flexDirection: 'column',
    marginRight: scale(10),
    padding: scale(10),
    position: 'relative',
  },
  name: {
    marginBottom: scale(6),
  },
  img: {
    width: wScale(71),
    height: hScale(71),
    position: 'absolute',
    right: scale(5),
    bottom: scale(5),
  }
});

export default Card;