import React from 'react';
import {View, Text} from 'react-native';


import {Button} from '../../components';
import {navigate} from '../../navigators';

import styles from './styles';

interface Props {
  title: string;
  subtitle: string;
}

export const LoginMessage = ({title, subtitle}: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.subtitleText}>{subtitle}</Text>
      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        onPress={() => navigate('Login')}>
        Login
      </Button>
    </View>
  );
};
