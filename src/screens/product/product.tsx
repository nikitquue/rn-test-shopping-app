import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RouterParamsList} from '../../navigation/root';
import {Routes} from '../../navigation/navigation.namespace';
import {styles} from './styles';
import {
  useSetShoppingCartItems,
  useShoppingCartItems,
} from '../../state/shopping-cart-items';
import {addItemToCart} from '../../utils';
import {useSetTotalPrice, useTotalPrice} from '../../state/total-price';

const ProductScreen: React.FC<
  NativeStackScreenProps<RouterParamsList, Routes.Product>
> = ({route}) => {
  const {product} = route.params;
  const cartItems = useShoppingCartItems();
  const setCartItems = useSetShoppingCartItems();
  const totalPrice = useTotalPrice();
  const setTotalPrice = useSetTotalPrice();

  const addItem = () => {
    const newItems = addItemToCart(cartItems, product);

    setTotalPrice(totalPrice + product.price);
    setCartItems(newItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textInfoContainer}>
          <Text numberOfLines={2}>Name: {product.name}</Text>
          <Text>Colour: {product.colour}</Text>
          <Text>Price: £{product.price}</Text>
        </View>
        <Image source={{uri: product.img}} style={styles.img} />
      </View>
      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;
