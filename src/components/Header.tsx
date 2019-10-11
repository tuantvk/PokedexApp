import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Row } from './Customs';
import { wScale } from '../utils';


const Header = () => (
  <Row>
    <Icon size={wScale(25)} name="ios-arrow-round-back" />
    <Icon size={wScale(25)} name="ios-menu" />
  </Row>
);

const styles = StyleSheet.create({

});

export default Header;