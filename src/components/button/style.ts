import {StyleSheet} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

import {colors, spacings, typography} from '../../config/theme';
import { widthConverter, widthPercentageToDP } from '../../utils';

export default StyleSheet.create({
  mainContainer: {},
  buttonContainer: {
  
    overflow: 'hidden',
    borderRadius: 5,
    justifyContent : 'center',
    
 
  },
  button: {
    borderRadius: 5,
    // paddingVertical: 10,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor : colors.primary,
    // marginHorizontal : widthPercentageToDP(5),
    width : "88%",
    alignSelf : "center",
    justifyContent :'center',
    alignContent : 'center',
    height : heightPercentageToDP(6),

  },
  buttonText: {
    ...typography.p3,
    
    color: colors.light,
    fontWeight: '400',
    textAlign: 'center',
  },
});
