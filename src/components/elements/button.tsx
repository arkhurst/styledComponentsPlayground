import React from 'react';
import {TouchableHighlight} from 'react-native';

interface Props {
  underlayColor: string;
  children: JSX.Element[] | JSX.Element;
  style?: Object;
  onPress: () => any;
  disabled?: boolean;
}

const ButtonComponent = (props: Props) => {
  return (
    <TouchableHighlight {...props} underlayColor={props.underlayColor}>
      {props.children}
    </TouchableHighlight>
  );
};

export default ButtonComponent;
