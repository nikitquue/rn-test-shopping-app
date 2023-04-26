import React from 'react';
import {FlatList, View, Text} from 'react-native';

import {styles} from './styles';
import {useShoppingCartItems} from '../../state/shopping-cart-items';
import {CartItem} from '../../components/cart-item';

import {useTotalPrice} from '../../state/total-price';

const ShoppingCartScreen = () => {
  const cartItems = useShoppingCartItems();
  const totalPrice = useTotalPrice();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total: £{totalPrice.toFixed(2)}</Text>
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => (
          <CartItem
            key={item.id + index}
            id={item.id}
            price={item.price}
            colour={item.colour}
            img={item.img}
            name={item.name}
            quantity={item.quantity}
          />
        )}
      />
    </View>
  );
};

export default ShoppingCartScreen;
