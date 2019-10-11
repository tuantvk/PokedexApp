import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  around?: boolean,
  children: React.ReactNode,
}

const Row = ({ around, children }: Props) => (
  <View
    style={{
      ...styles.row,
      justifyContent: around ? 'space-around' : 'space-between',
    }}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  }
});

export default Row;