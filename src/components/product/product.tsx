import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

import {ProductProps} from './types';

import {
  useSetShoppingCartItems,
  useShoppingCartItems,
} from '../../state/shopping-cart-items';

import {Routes} from '../../navigation/navigation.namespace';
import {getProduct} from '../../api';
import {addItemToCart} from '../../utils';
import {useSetTotalPrice, useTotalPrice} from '../../state/total-price';

const Product: React.FC<ProductProps> = ({id, colour, price, name, img}) => {
  const cartItems = useShoppingCartItems();
  const {navigate} = useNavigation<any>();
  const setCartItems = useSetShoppingCartItems();
  const totalPrice = useTotalPrice();
  const setTotalPrice = useSetTotalPrice();

  const addItem = () => {
    const newItems = addItemToCart(cartItems, {
      id: String(id),
      colour,
      price,
      name,
      img,
    });

    setTotalPrice(totalPrice + price);

    setCartItems(newItems);
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: img}} style={styles.img} />
      <Text>{name}</Text>
      <Text>{colour}</Text>
      <Text>Price: £{price}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() =>
            getProduct(id).then(res => navigate(Routes.Product, {product: res}))
          }>
          <Text style={styles.blackText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={styles.text}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;
