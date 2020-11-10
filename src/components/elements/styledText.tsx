import React from 'react';
import {Text} from 'react-native';

interface Props {
  type?: string;
  style?: Object;
}
const StyledText: React.FC<Props> = props => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: `${
            props.type === 'bold'
              ? 'BeVietnam-SemiBold.ttf'
              : props.type === 'medium'
              ? 'BeVietnam-Medium.ttf'
              : 'BeVietnam-Regular.ttf'
          }`,
        },
      ]}
    />
  );
};

export default StyledText;
