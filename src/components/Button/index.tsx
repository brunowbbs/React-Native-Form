// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { RectButton } from 'react-native-gesture-handler';

// import colors from '../../theme/colors';


// //gesture handler precisou de implementação nativa

// type IButton = {
//   text: string;
//   onPress: () => void;
// };

// const Button = ({ text, onPress }: IButton) => {
//   return (
//     <RectButton style={styles.container} onPress={onPress} enabled={true}>
//       <View accessible={true}>
//         <Text style={styles.text}>{text}</Text>
//       </View>
//     </RectButton>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//     width: '100%',
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.PRIMARY,
//   },
//   text: {
//     color: colors.WHITE,
//     fontSize: 16,
//   },
// });

// export default Button;


import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../theme/colors';
import styles from './styles';

interface ButtonProps {
  title: string,
  disabled?: boolean,
  loading?: boolean,
  secondary?: boolean,
  primary?: boolean,
  danger?: boolean,
  onPress: Function
}

const Button = ({ title, disabled, loading, secondary, primary, danger, onPress }: ButtonProps) => {

  const getBgColor = () => {
    if (disabled) {
      return colors.GREY
    } else if (primary) {
      return colors.PRIMARY
    } else if (secondary) {
      return colors.SECONDARY
    } else if (danger) {
      return colors.DANGER
    }
  }

  return (
    <RectButton
      enabled={!disabled}
      style={[styles.wrapper, { backgroundColor: getBgColor() }]}
      onPress={onPress}
    >
      <View style={[styles.loaderSection]}>
        {loading ?? <ActivityIndicator color={colors.ACCENT} />}
        {title && <Text style={{ color: disabled ? "black" : colors.WHITE, paddingLeft: loading ? 5 : 0 }}>{title}</Text>}

      </View>
    </RectButton>
  );
};


export default Button;


