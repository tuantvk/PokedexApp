import React from 'react';
import { Text as RNText } from 'react-native';

enum TextSize {
  S = 12,
  M = 14,
  L = 16,
  XL = 20,
  XXL = 26
}

interface Props {
  size?: TextSize,
  children: React.ReactNode,
}

const Text = ({
  size,
  children,
}: Props) => (
    <RNText>
      {children}
    </RNText>
  );


export default Text;