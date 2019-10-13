import React from 'react';
import { Text } from './Customs';

const Title = ({
  children,
  size,
  ...rest
}: any) => (
    <Text size={size || "XL"} bold={true} {...rest}>
      {children}
    </Text>
  );


export default Title;