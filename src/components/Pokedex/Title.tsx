import React from 'react';
import { Text } from '../Customs';
import { scale } from '../../utils';

interface TitleProps {
  name: string;
}

const Title = ({ name }: TitleProps) => (
  <Text bold={true} style={{ marginVertical: scale(15) }}>
    {name}
  </Text>
);

export default Title;