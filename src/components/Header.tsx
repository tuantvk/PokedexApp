import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Row } from './Customs';
import { wScale } from '../utils';
import { Colors } from '../constants';

interface HeaderProps {
  rightIcon?: string;
  color?: string;
  onPress?: any;
  onPressLike?: any;
  like?: boolean;
}

const Header = ({
  rightIcon,
  color,
  onPress,
  onPressLike,
  like,
}: HeaderProps) => (
    <Row>
      <TouchableOpacity activeOpacity={1} onPress={onPress}>
        <Icon
          color={color || Colors.black}
          size={wScale(25)}
          name="ios-arrow-round-back"
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} onPress={onPressLike}>
        <Icon
          color={like ? Colors.red : (color || Colors.black)}
          size={wScale(23)}
          name={like ? "ios-heart" : (rightIcon || "ios-menu")}
        />
      </TouchableOpacity>
    </Row>
  );


export default Header;