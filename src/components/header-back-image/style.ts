import {StyleSheet} from 'react-native';

import {colors, spacings} from '../../config/theme';

export default StyleSheet.create({

  button: {

    borderColor: colors.lightGrey,
    backgroundColor : colors.darkGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft : 15,

  },
  button2: {

    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft : 15,
    opacity : 1,
 
  },
  button3: {

    borderColor: colors.lightGrey,
    backgroundColor : colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft : 15,
    top : 3,
  },

});