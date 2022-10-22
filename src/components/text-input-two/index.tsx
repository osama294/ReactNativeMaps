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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { heightConverter, heightPercentageToDP } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends TextInputProps {
  required?: boolean;
  type? : string;
  label: string;
  error?: string | boolean;
  editable?: boolean;
  iconname?: string;
  showLabel?:boolean;
}

export const TextInputTwo = forwardRef<RNTextInput, Props>(
  
  ({required = false, label, showLabel = false,error, editable = true,iconname,type, ...props}: Props, ref) => {
    const hasError = !_isEmpty(error);
    const [visible, setVisibility] = React.useState(false);
    const icon = !visible ? 'eye-off' : 'eye';

    return (
      <View style={type == "time" ? styles.mainContainer2:styles.mainContainer}>
    { showLabel == true  &&  <Text style={[styles.labelText,{left: -5,marginBottom : heightPercentageToDP(1.5),color: colors.primary}]}>
          {label}
       
        </Text>}
        <View style={{flexDirection: 'row',

        marginTop: -7.5
      }}>
       { (type != 'password' && type!= 'bio' && type!= 'details' && type!= 'notes' && type!= 'time') && <RNTextInput
          ref={ref}
          editable={editable}
          placeholderTextColor = {colors.black}
          
          placeholder = {label}
          {...props}
          style={
            [
              styles.textInput,
              styles.labelText,
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
          placeholderTextColor = {colors.black}
          
          placeholder = {label}
          {...props}
          style={
            [
              styles.textInput,
              styles.labelText,
              error && {
                borderColor: colors.error,
              },
              !editable && {
                backgroundColor: colors.lightGrey,
              },
            ] as ViewStyle
          }
        />}
            { type == 'bio' && 
            <RNTextInput
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


{ type == 'details' && 
            <RNTextInput
           underlineColorAndroid='transparent'
           multiline = {true}
          ref={ref}
          editable={editable}
         

          {...props}
          style={
            [
              styles.textInput3,
              error && {
                borderColor: colors.error,
              },
              !editable && {
                backgroundColor: colors.lightGrey,
              },
            ] as ViewStyle
          }
        />}
        { type == 'notes' && 
            <RNTextInput
           underlineColorAndroid='transparent'
           multiline = {true}
          ref={ref}
          editable={editable}
         

          {...props}
          style={
            [
              styles.textInput4,
              error && {
                borderColor: colors.error,
              },
              !editable && {
                backgroundColor: colors.lightGrey,
              },
            ] as ViewStyle
          }
        />}
            { type == 'time' && 
            <RNTextInput
           underlineColorAndroid='transparent'
           multiline = {true}
          ref={ref}
          editable={editable}
         

          {...props}
          style={
            [  
              styles.textInput5,
              error && {
                borderColor: colors.error,
              },
              !editable && {
                backgroundColor: colors.lightGrey,
              },
            ] as ViewStyle
          }
        />}

 
           </View>
        {hasError && <Text style={styles.errorText}>{error}</Text>}
       
      </View>
    );
  },
);
