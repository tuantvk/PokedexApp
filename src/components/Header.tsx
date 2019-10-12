import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Row } from './Customs';
import { wScale } from '../utils';
import { Colors } from '../constants';

interface HeaderProps {
  rightIcon?: string;
  color?: string;
}

const Header = ({
  rightIcon,
  color,
}: HeaderProps) => (
    <Row>
      <Icon
        color={color || Colors.black}
        size={wScale(25)}
        name="ios-arrow-round-back"
      />
      <Icon
        color={color || Colors.black}
        size={wScale(25)}
        name={rightIcon || "ios-menu"}
      />
    </Row>
  );

const styles = StyleSheet.create({

});

export default Header;