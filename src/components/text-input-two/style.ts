import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

import {colors, spacings, typography} from '../../config/theme';
import { heightConverter,heightPercentageToDP, widthConverter, widthPercentageToDP } from '../../utils';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal : widthPercentageToDP(5),
 
  },
  mainContainer2: {
    flex: 1,
    marginHorizontal : widthPercentageToDP(1),
 
  },
  labelText: {
    
    fontWeight: '400',
    fontSize : heightPercentageToDP(1.7),
    color: colors.black,
    paddingHorizontal :widthPercentageToDP(5),
    
    

  },
  textInput: {
    
    ...typography.p4,
    justifyContent : 'flex-start',
    backgroundColor : colors.accentPrimary,
    alignSelf : 'center',
    marginTop: spacings.xs,
    borderRadius: heightPercentageToDP(1),
    height : heightPercentageToDP(6),
    width : "100%",
    color : colors.black,

    
    


  },
  textInput2: {
    
    ...typography.p4,
    justifyContent : 'flex-start',
    color : colors.black,
    marginTop: spacings.xs,
    borderRadius: heightPercentageToDP(1),
    padding : heightPercentageToDP(3),
    width : "100%",
    backgroundColor : colors.accentSecondary,
    height :  heightPercentageToDP(15.0),


  },
  textInput3: {
    
    ...typography.p4,
    justifyContent : 'flex-start',
    color : colors.black,
    marginTop: spacings.xs,
    borderRadius: 10,
    padding : heightPercentageToDP(1),
    width : "100%",
    backgroundColor : colors.accentSecondary,
    height :  heightPercentageToDP(10.0),


  },
  textInput4: {
    
    ...typography.p4,
    justifyContent : 'flex-start',
    color : colors.black,
    marginTop: spacings.xs,
    borderRadius: 10,
    padding : heightPercentageToDP(1),
    width : "100%",
    backgroundColor : colors.accentSecondary,
    height :  heightPercentageToDP(25.0),


  },
  textInput5: {
    
    ...typography.p4,

    
    justifyContent :'center',
   
    color : colors.black,
    marginTop: spacings.xs,
    borderRadius: heightPercentageToDP(1),

    width : "100%",
    backgroundColor : colors.ternary,
    height : heightPercentageToDP(6),
    paddingTop : heightPercentageToDP(1.5),
    paddingLeft : widthPercentageToDP(4.5),

  },
  errorText: {
    ...typography.p5,
    color: colors.error,
    marginTop:  heightPercentageToDP(1),
    position: 'relative',
    marginHorizontal : spacings.md,
  },

  textFieldIcon: {
    position : 'relative',
    elevation: 0,
    right : widthPercentageToDP(10),
    marginTop : heightPercentageToDP(2.5)
    
   
  },
});
