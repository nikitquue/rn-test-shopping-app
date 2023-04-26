import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {Routes} from '../navigation.namespace';
import {Home, Products} from '../../screens';
import {ShoppingCartButton} from '../../components';

export type RouterParamsList = {
  [Routes.Home]: undefined;
  [Routes.Products]: undefined;
};

const {Navigator, Screen} = createDrawerNavigator<RouterParamsList>();

export const HomeDrawer = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        headerRight: () => <ShoppingCartButton />,
      }}
      initialRouteName={Routes.Home}>
      <Screen name={Routes.Home} component={Home} />
      <Screen name={Routes.Products} component={Products} />
    </Navigator>
  );
};
