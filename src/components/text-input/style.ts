import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

import {colors, spacings, typography} from '../../config/theme';
import { heightPercentageToDP } from '../../utils';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal : spacings.md,
    marginLeft : spacings.md + 2
    
    
  },
  labelText: {

    fontWeight: '400',
    fontSize : 14,
    color: colors.primary,
  },
  textInput: {
    
    ...typography.p4,
    justifyContent : 'flex-start',
    color : colors.black,
   
    marginTop: spacings.xs,
    borderRadius: 10,
    height : 40,
    width : "90%",
    


  },

  textInput2: {
    
    ...typography.p4,
    justifyContent : 'flex-start',
    color : colors.black,
   
    marginTop: spacings.xs,
    borderRadius: 10,

    width : "90%",
 
    height :  heightPercentageToDP(15.0),

  
 
    marginVertical :spacings.sm,

    
    


  },
  errorText: {
    ...typography.p5,
    color: colors.error,
    marginTop : heightPercentageToDP(1),
    position: 'relative',
  },

  textFieldIcon: {
   
    elevation: 0,
    paddingVertical: spacings.sm,
    justifyContent : 'flex-end',
  },
  lineview: {
    height: 1,
    width: "97.5%",
    marginTop : -5,
    backgroundColor: colors.darkGrey,
  },
});
