import {Platform, StyleSheet} from 'react-native';

import {colors, spacings, typography} from '../../config/theme';
import { heightConverter,heightPercentageToDP, widthConverter, widthPercentageToDP } from '../../utils';

export default StyleSheet.create({
  mainContainer: {

    width :Platform.OS === 'ios' ? widthPercentageToDP(80): widthPercentageToDP(75),
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'flex-start',
    justifyContent :'flex-start',
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: heightPercentageToDP(1.2),
    height : spacings.xl,
    backgroundColor: colors.ternary,
    paddingHorizontal: widthPercentageToDP(5)

  },

  contentTextBold3: {
    ...typography.p1,
    position : 'absolute',
    textAlign : 'center',
    fontWeight: 'bold',
    alignSelf : 'center',
  },
  textInput: {
    ...typography.p5,
    flex: 1,
    padding: 0,
    margin: 0,
    marginHorizontal : widthPercentageToDP(5),
    color : colors.black
   
  
  },
  contentTextBold4: {
    ...typography.p3,
    position : 'relative',
    textAlign : 'center',
    fontWeight: 'bold',
    alignSelf : 'center',
    color : colors.black

  },
});
