import {StyleSheet} from 'react-native';

import {colors, spacings, typography} from '../../config/theme';

export default StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  titleText: {
    ...typography.p2,
    fontWeight: 'bold',
    marginVertical: spacings.sm,
    textAlign: 'center',
  },
  subtitleText: {
    ...typography.p3,
    textAlign: 'center',
    color : colors.black
    
  },
  buttonContainer: {
    marginTop: spacings.lg,
    width: 250,
  },
  button: {},
});
