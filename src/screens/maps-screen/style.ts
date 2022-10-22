import {BackHandler, Platform, StyleSheet} from 'react-native';

import {colors, spacings, typography} from '../../config/theme';
import { heightConverter,heightPercentageToDP, widthConverter, widthPercentageToDP } from '../../utils';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.ternary,

      },
  scrollViewContainer: {
    flex: 1,
  },
  map: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollViewContentContainer: {

    marginBottom: Platform.OS === 'ios' ? spacings.xxl : spacings.xxxl
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: spacings.xl,
  },
  headerTitleText: {
    ...typography.p4,
    fontWeight: 'bold',
    textAlign : 'center',
    marginHorizontal : spacings.md
    
  },
  headerTitleText2: {
    ...typography.h3,
    position : 'absolute',
    textAlign : 'center',
    fontWeight: 'bold',
    alignSelf : 'center',
    marginHorizontal :spacings.xxxxl + 5,


   
  },
  contentContainer: {},
  contentText: {
    ...typography.p4,
    fontWeight : '400',
    marginVertical : spacings.xs,
    color  : colors.darkGrey
   
  },
  contentText5: {
    ...typography.p4,
    left : widthPercentageToDP(270),
    top:-heightPercentageToDP(0.5),
    fontWeight : '400',
    textAlign : 'right',
    width : widthPercentageToDP(100),
  },
  contentTextBold: {
    fontWeight: 'bold',
  },

  contentText2: {
    ...typography.p5,
    fontWeight : '700',
    alignSelf : 'flex-start',
    color : colors.primary,
    position: 'relative',
    
    
  },

  contentText3: {
    ...typography.p6,
    fontWeight : '400',
    alignSelf : 'flex-start',

    color : colors.lightGrey,
    position: 'relative',
    paddingHorizontal : spacings.xs,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  button: {

    alignSelf : 'center',
    backgroundColor: 'black',
    padding: 10,
    zIndex: 4,
    borderRadius: 18,
    borderWidth : 2,
    borderColor :  colors.primary,
  },
  title: {
    color: 'white',
    textAlign:'center',
    fontSize: 12,
    fontWeight :'700',
  },

  contentText4: {
    ...typography.p6,
    fontWeight : '400',
    alignSelf : 'flex-start',
    color : colors.lightGrey,
    position: 'relative',
    paddingHorizontal : spacings.xs,
   
  },
  item:{
  
  backgroundColor : colors.accentPrimary,
  padding : heightPercentageToDP(1.2),
  marginVertical : spacings.md,
  marginHorizontal: spacings.sm,
  borderRadius: heightPercentageToDP(1.2)
  },
  topContainer: {
    flexDirection: 'row',
    paddingVertical: spacings.xs,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomContainer:{
    top : heightPercentageToDP(3.0),
    marginVertical : spacings.md,
  
  
  },
 

 
  button2:{
    top : heightPercentageToDP(4.5),
    marginVertical : spacings.md,
    marginHorizontal : spacings.xs + widthPercentageToDP(5),
 
  },

  titleText: {
    flex: 1,
    fontSize: heightPercentageToDP(2.2),
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding:heightPercentageToDP(2.0),
  },
  headerText: {
    fontSize: heightPercentageToDP(1.6),
    fontWeight: '500',
  },
  separator: {
    height: heightPercentageToDP(0.5),
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: widthPercentageToDP(16),
    marginRight: widthPercentageToDP(16),
  },
  text: {
    fontSize: heightPercentageToDP(1.6),
    color: '#606070',
    padding: heightPercentageToDP(1.0),
  },
  content: {
    paddingLeft: widthPercentageToDP(10),
    paddingRight: widthPercentageToDP(10),
    backgroundColor: '#fff',
  },
});
