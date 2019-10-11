import React from 'react';
import { Text } from './Customs';

const Title = ({
  children,
}: any) => (
    <Text size="XL" bold={true}>
      {children}
    </Text>
  );


export default Title;