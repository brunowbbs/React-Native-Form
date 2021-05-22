import React, { ReactNode, useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import colors from '../../theme/colors';

import styles from './styles';

interface InputProps {
  label: string,
  icon?: ReactNode,
  iconPosition?: string,
  placeholder: string,
  error?: string,
  secureTextEntry?: boolean,
  onChangeText: Function

}

const Input = ({ label, icon, iconPosition, placeholder, error, secureTextEntry, onChangeText }: InputProps) => {

  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  }

  const getBorderColor = () => {
    if (focused) {
      return colors.PRIMARY
    }
    else if (error) {
      return colors.DANGER
    } else {
      return colors.GREY
    }
  }

  return (
    <View style={styles.inputContainer} >
      {label && <Text> {label}</Text>}

      <View style={[styles.wrapper, {
        borderColor: getBorderColor(),
        flexDirection: getFlexDirection(),
        alignItems: icon ? 'center' : 'baseline'

      }]}>
        <View>{icon && icon}</View>

        <TextInput
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          style={styles.textInput}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};


export default Input;
