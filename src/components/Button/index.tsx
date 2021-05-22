import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

//gesture handler precisou de implementação nativa

type IButton = {
  text: string;
  onPress: () => void;
};

const Button = ({text, onPress}: IButton) => {
  return (
    <RectButton style={styles.container} onPress={onPress} enabled={true}>
      <View accessible={true}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9900',
  },
  text: {
    color: '#312e38',
    fontSize: 15,
  },
});

export default Button;
