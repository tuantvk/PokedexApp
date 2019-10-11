import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { scale } from '../../utils';

const Badge = ({ children }: any) => (
  <View style={styles.badge}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  badge: {
    borderRadius: scale(12),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignSelf: 'flex-start',
    paddingHorizontal: scale(6),
    paddingVertical: scale(1),
    marginBottom: scale(3.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Badge;