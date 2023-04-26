/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {RecoilRoot} from 'recoil';

import {SafeAreaView} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './navigation/root';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RecoilRoot>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </RecoilRoot>
    </SafeAreaView>
  );
};

export default App;
