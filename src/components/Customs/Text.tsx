import React from 'react';
import { Text as RNText } from 'react-native';
import { tuple } from '../../utils';

const TextSizes = tuple('S', 'M', 'L', 'XL', 'XXL');
export type TextSize = (typeof TextSizes)[number];

interface Props {
  size?: TextSize,
  children: React.ReactNode,
}

const defaultProps: Props = {
  size: 'M',
  children: null
}

const Text: React.SFC<Props> = ({
  children,
}) => (
    <RNText>
      {children}
    </RNText>
  );

Text.defaultProps = defaultProps;

export default Text;