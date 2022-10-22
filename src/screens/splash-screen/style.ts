import {StyleSheet} from 'react-native';
import { LinearGradient } from 'react-native-svg';
import {typography} from '../../config/theme';
import { heightConverter,heightPercentageToDP,widthConverter, widthPercentageToDP } from '../../utils';

export default StyleSheet.create({
  mainContainer: {

    backgroundColor: '#ffffff',
  },
  backgroundContainer: {

    width: '100%',
    height: '100%',
  },
  contentContainer: {
    marginTop : heightPercentageToDP(36.8),
    marginRight: widthPercentageToDP(137.5),
    marginLeft : widthPercentageToDP(137.5),
    marginBottom : heightPercentageToDP(36.8),
    height : heightPercentageToDP(10.0),
    width : heightPercentageToDP(10.0),
    borderRadius: heightPercentageToDP(5.0),
    justifyContent: 'center',
    position :'absolute',
    backgroundColor : '#F56104',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    
  },
  splashText: {
    ...typography.h2,
    fontWeight : 'bold',
    color: '#fff',
  },
  screenNameText: {
    ...typography.p4,
    color: '#fff',
  },
  image: {
    marginBottom: heightPercentageToDP(20),
    opacity: 1,
  }
});
