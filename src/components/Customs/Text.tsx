import React from 'react';
import {
  Text as RNText,
  TextStyle,
} from 'react-native';
import {
  Consts,
  Colors,
} from '../../constants';

export interface TextProps {
  size?: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  style?: TextStyle;
  bold?: boolean,
  color?: string,
  children: React.ReactNode;
}

const getSize: { [key: string]: number } = Consts;

const checkSize = (size: string): number => {
  return getSize[size] || 0;
}

const Text = ({
  size = 'M',
  children,
  style,
  bold,
  color,
  ...rest
}: TextProps) => (
    <RNText {...rest}
      style={{
        ...style,
        fontSize: checkSize(size),
        fontWeight: bold ? '700' : '400',
        color: color || Colors.black,
      }}
    >
      {children}
    </RNText>
  );

export default Text;