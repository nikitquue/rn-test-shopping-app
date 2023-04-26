import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {Routes} from '../../navigation/navigation.namespace';

const HomeScreen = (): JSX.Element => {
  const {navigate} = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text>Shopping app</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate(Routes.Products)}>
        <Text style={styles.text}>View Products</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
