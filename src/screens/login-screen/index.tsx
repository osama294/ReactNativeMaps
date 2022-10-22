import React, {createRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput as RNTextInput,
  Dimensions,
  Alert,

} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Rect, Circle, ClipPath} from 'react-native-svg';
import {StackNavigationProp} from '@react-navigation/stack';
import * as Yup from 'yup';
import _isEmpty from 'lodash/isEmpty';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, spacings} from '../../config/theme';


import {
  Button,
  VerticalSpacer,
  TextInputTwo,
} from '../../components';

import {AppStackParamList} from '../../navigators/routes';

import styles from './style';



type LoginScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'Login'
>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email Address')
    .required('Email Address is Required'),
  password: Yup.string().required('Password required'),
});

const {width, height} = Dimensions.get('window');

export const LoginScreen = ({navigation}: Props) => {
  // const {isLoggingInUser} = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  let passwordRef = createRef<RNTextInput>();

 

  return (
   <View style = {styles.backgroundContainer}>

<SafeAreaView edges={['bottom']} style={styles.mainContainer}>

        <ScrollView bounces={false} keyboardShouldPersistTaps="always">
     
          <View style={styles.headerContainer}>
          <Text style ={styles.logoText1}>LOGIN</Text>
          </View>
          <View style={styles.contentContainer}>
          
            <Text style={styles.connectWithEmailText}>
            Access your data with your registered
            e-mail address.
            </Text>
            <VerticalSpacer size={spacings.md} />
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={(values, action) => {
           
    
               if(values.email == "dev_account@maps.com" &&  values.password == "12345678"){
                    navigation.navigate('Home')
               }else{
                Alert.alert("Login Failed","Invalid Email or Password")
               }

              }}
              // validateOnChange={false}
              validationSchema={LoginValidationSchema}>
              {({handleChange, handleSubmit, values, errors, isSubmitting}) => (
                <View>
                  <TextInputTwo
                       iconname='mail'
                    label="Email Address"
                    value={values.email}
                    autoCompleteType="email"
                    autoCapitalize="none"
                    onChangeText={handleChange('email')}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      passwordRef.current && passwordRef.current.focus()
                    }
                  
                    error={!_isEmpty(errors) && errors.email}
                  />
                  <VerticalSpacer size={spacings.lg} />
                  <TextInputTwo
                     type='password'
                    label="Password"
                    iconname='eye'
                    value={values.password}
                    autoCompleteType="password"
               
                    onChangeText={handleChange('password')}
                    returnKeyType="done"
                    ref={passwordRef}
                    error={!_isEmpty(errors) && errors.password}
                  />

           
                  <VerticalSpacer size={spacings.lg} />
                  <Button  onPress={handleSubmit}>
                    Login
                  </Button>
            
                
                </View>
              )}
            </Formik>
            <View style={styles.footerContainer}>
              
  
         
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>


   </View>

  );
};
