import React from 'react';
import { Text } from './Customs';

const Title = ({
  children,
  ...rest
}: any) => (
    <Text size="XL" bold={true} {...rest}>
      {children}
    </Text>
  );


export default Title;