import React, {forwardRef} from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  ViewStyle,
  
} from 'react-native';
import _isEmpty from 'lodash/isEmpty';
import styles from './style';
import {colors} from '../../config/theme';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { heightConverter, heightPercentageToDP } from '../../utils';

interface Props extends TextInputProps {
  required?: boolean;
  type? : string;
  label: string;
  error?: string | boolean;
  editable?: boolean;
  iconname?: string;
}

export const TextInput = forwardRef<RNTextInput, Props>(
  
  ({required = false, label, error, editable = true,iconname,type, ...props}: Props, ref) => {
    const hasError = !_isEmpty(error);
    const [visible, setVisibility] = React.useState(false);
    const icon = !visible ? 'eye-off' : 'eye';

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.labelText}>
          {label}
          {required && '*'}
        </Text>
        <View style={{flexDirection: 'row',
        marginTop: -7.5
      }}>
       { (type != 'password' && type != 'bio')  &&  <RNTextInput
          ref={ref}
          editable={editable}
      
          {...props}
          style={
            [
              styles.textInput,
              error && {
                borderColor: colors.error,
              },
              !editable && {
                backgroundColor: colors.lightGrey,
              },
            ] as ViewStyle
          }
        />}
          { type == 'password' && <RNTextInput
          ref={ref}
          editable={editable}
          secureTextEntry={!visible}

          {...props}
          style={
            [
              styles.textInput,
              error && {
                borderColor: colors.error,
              },
              !editable && {
                backgroundColor: colors.lightGrey,
              },
            ] as ViewStyle
          }
        />}
           { type == 'bio' && <RNTextInput
           
           underlineColorAndroid='transparent'
           multiline = {true}
          ref={ref}
          editable={editable}
         

          {...props}
          style={
            [
              styles.textInput2,
              error && {
                borderColor: colors.error,
              },
              !editable && {
                backgroundColor: colors.lightGrey,
              },
            ] as ViewStyle
          }
        />}
        

        { (type != 'password' && type != 'building' && type != 'bio')   &&  
        <Feather name= {iconname} color={colors.primary} size={ heightPercentageToDP(2.2)} style = {styles.textFieldIcon}/>
           
           }
            { type == 'password'   &&  <Feather
           name= {icon} color={colors.primary} size={ heightPercentageToDP(2.2)} style = {styles.textFieldIcon}
           onPress={() => setVisibility(!visible)}/>
           }
            { type == 'building'   &&  <FontAwesome
           name= {"building"} color={colors.primary} size={ heightPercentageToDP(2.2)} style = {styles.textFieldIcon}
           />
           }
              { type == 'bio'   &&  <></>
           }
           </View>
           <View style={styles.lineview} />
        {hasError && <Text style={styles.errorText}>{error}</Text>}
       
      </View>
    );
  },
);
