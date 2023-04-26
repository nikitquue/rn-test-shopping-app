import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ShoppingCartIcon from '../../assets/shopping-cart.svg';
import {styles} from './styles';
import {Routes} from '../../navigation/navigation.namespace';
import {useShoppingCartItems} from '../../state/shopping-cart-items';
import {countQuantity} from '../../utils';

const ShoppingCartButton: React.FC = () => {
  const {navigate} = useNavigation<any>();
  const cartItems = useShoppingCartItems();

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigate(Routes.ShoppingCart)}>
      <ShoppingCartIcon width={24} height={24} />
      <Text style={styles.buttonText}>{countQuantity(cartItems)}</Text>
    </TouchableOpacity>
  );
};

export default ShoppingCartButton;
