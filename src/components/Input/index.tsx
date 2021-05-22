import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

type IInput = {
  label: string;
  placeholder: string;
  setValue: Function;
  value: string | undefined;
  keyboardType:
    | 'email-address'
    | 'decimal-pad'
    | 'numeric'
    | 'phone-pad'
    | 'numbers-and-punctuation'
    | 'default';
};

const Input = ({label, placeholder, setValue}: IInput) => {
  const handleChange = (text: string) => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType="numbers-and-punctuation"
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleChange}
        numberOfLines={1}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },

  input: {
    color: '#333',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 5,
  },
  label: {
    fontWeight: '300',
    color: '#555',
    fontSize: 12,
  },
});

export default Input;
