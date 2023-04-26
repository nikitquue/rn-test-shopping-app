import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from '../navigation.namespace';
import {Product, ShoppingCart} from '../../screens';
import {HomeDrawer} from '../drawer';
import {ShoppingCartItem} from '../../state/types';

export type RouterParamsList = {
  [Routes.Product]: {product: ShoppingCartItem};
  [Routes.ShoppingCart]: undefined;
  [Routes.HomeDrawer]: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RouterParamsList>();

export const RootStack = (): JSX.Element => {
  return (
    <Navigator
      initialRouteName={Routes.HomeDrawer}
      screenOptions={{
        headerShown: true,
      }}>
      <Screen name={Routes.Product} component={Product} />
      <Screen name={Routes.ShoppingCart} component={ShoppingCart} />
      <Screen
        name={Routes.HomeDrawer}
        component={HomeDrawer}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};
