import {StyleSheet} from 'react-native';

import {colors, spacings, typography} from '../../config/theme';

export default StyleSheet.create({
  mainContainer: {
   marginTop : spacings.md,

   width : "100%"
    
  },
  topContainer: {
    flexDirection: 'row',
    paddingVertical: spacings.xs,
    alignItems: 'center',
    
    justifyContent: 'space-between',
  },
  
 
  title:{

    ...typography.p3,
    fontWeight : '500',
     color: colors.black,
    textAlign : 'center',

  },


});
