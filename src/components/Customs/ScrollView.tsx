import React from 'react';
import { ScrollView as RNScrollView } from 'react-native';

const ScrollView = ({ children }: any) => (
  <RNScrollView
    scrollEventThrottle={16}
    showsVerticalScrollIndicator={false}
  >
    {children}
  </RNScrollView>
);

export default ScrollView;