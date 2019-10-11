import React from 'react';
import {
  Text as RNText,
  TextStyle,
} from 'react-native';
import { Consts } from '../../constants';

export interface TextProps {
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  style?: TextStyle;
  bold?: boolean,
  children: React.ReactNode;
}

const getSize: { [key: string]: number } = Consts;

const checkSize = (size: string): number => {
  return getSize[size] || 0;
}

const Text = ({
  size,
  children,
  style,
  bold,
  ...rest
}: TextProps) => (
    <RNText {...rest}
      style={{
        ...style,
        fontSize: checkSize(size),
        fontWeight: bold ? '700' : '400',
      }}
    >
      {children}
    </RNText>
  );

export default Text;