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
import {
  Colors,
  Images,
} from '../../constants';
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
        <Badge key={index}>
          <Text color={Colors.white} size="S">{t}</Text>
        </Badge>
      ))}
      <Image
        source={{ uri: img }}
        resizeMode="contain"
        style={styles.img}
      />
      <Image
        source={{ uri: Images.pokedex_logo }}
        style={styles.imgLogo}
        resizeMode="contain"
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
    width: wScale(75),
    height: hScale(75),
    position: 'absolute',
    right: scale(3),
    bottom: scale(3),
  },
  imgLogo: {
    width: wScale(90),
    height: hScale(90),
    position: 'absolute',
    right: scale(-18),
    bottom: scale(-12),
    opacity: .13,
  }
});

export default Card;