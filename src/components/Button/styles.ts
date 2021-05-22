import { StyleSheet } from "react-native";
import colors from '../../theme/colors'

export default StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  loaderSection: {
    flexDirection: "row"
  },

  textInput: {
    flex: 1
  },

  error: {
    color: colors.DANGER,
    paddingTop: 4,
    fontSize: 12
  }
})