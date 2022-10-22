import {StyleSheet} from 'react-native';

import {colors, spacings, typography} from '../../config/theme';
import { heightConverter, heightPercentageToDP } from '../../utils';

export default StyleSheet.create({
  backgroundContainer: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFFE6',
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: heightPercentageToDP(3.0),
    paddingHorizontal: spacings.sm,
    marginBottom : -10,
  },
  
  logoText1: {
    fontSize : heightPercentageToDP(5),
    fontWeight: '600',
    color: colors.black,
    alignSelf: 'center'
  },
  headerTitleText: {

    fontWeight: 'bold',
    color: colors.light,
  },
  contentContainer: {
    paddingHorizontal: spacings.sm,
    paddingVertical: spacings.md,
  },
  
 
  connectWithEmailText: {
    fontSize : heightPercentageToDP(2),
    textAlign: 'center',
    marginVertical: spacings.xs,
    marginHorizontal : spacings.xl,
    marginBottom :  spacings.lg,
    color: colors.black,
    fontWeight : '600',
  },
  forgotPasswordButton: {
    marginTop: spacings.lg,
  },
  forgotPasswordButtonText: {
    ...typography.p4,
    textAlign: 'center',
    color: colors.black,
    fontWeight: '500',
    textDecorationLine: 'underline'
  },
  formNoticeText: {
    ...typography.p3,
    textAlign: 'center',
    marginTop: spacings.sm,
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: spacings.md,
    marginBottom: spacings.lg,
    alignItems: 'center',
    alignSelf : 'center',

  },
  footerText: {

    ...typography.p4,

  },

  footerTextEmphasized: {
    ...typography.p4,
    color: colors.black,
    fontWeight: '400',
    
    textDecorationLine: 'underline'
  },
});
