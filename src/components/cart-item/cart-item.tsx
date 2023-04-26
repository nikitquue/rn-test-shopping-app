import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {
  useSetShoppingCartItems,
  useShoppingCartItems,
} from '../../state/shopping-cart-items';
import {CartItemProps} from './types';
import {addItemToCart, removeItemAtIndex} from '../../utils';
import {useSetTotalPrice, useTotalPrice} from '../../state/total-price';

const CartItem: React.FC<CartItemProps> = ({
  id,
  colour,
  price,
  name,
  img,
  quantity,
}) => {
  const cartItems = useShoppingCartItems();
  const setCartItems = useSetShoppingCartItems();
  const totalPrice = useTotalPrice();
  const setTotalPrice = useSetTotalPrice();

  const deleteItem = () => {
    const newItems = removeItemAtIndex(cartItems, id);

    setTotalPrice(totalPrice - price);
    setCartItems(newItems);
  };

  const addItem = () => {
    const newItems = addItemToCart(cartItems, {id, colour, price, name, img});
    setTotalPrice(totalPrice + price);
    setCartItems(newItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={{uri: img}} style={styles.img} />
        <View>
          <Text numberOfLines={2} style={styles.nameText}>
            {name}
          </Text>
          <Text>Price: £{price}</Text>
          <Text>Quantity: {quantity}</Text>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={styles.text}>Add more</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewButton} onPress={deleteItem}>
          <Text style={styles.blackText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
