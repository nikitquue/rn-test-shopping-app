import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import {styles} from './styles';
import {getProducts} from '../../api';

import {Product} from '../../components/product';
import {ProductProps} from '../../components/product/types';

const ProductsScreen = () => {
  const [products, setProducts] = useState<[] | Array<ProductProps>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await getProducts();
      setProducts(res);
      setLoading(false);
    };
    fetch();
  }, [setLoading]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item, index}) => (
          <Product
            key={item.id + item.name + index}
            id={item.id}
            price={item.price}
            colour={item.colour}
            img={item.img}
            name={item.name}
          />
        )}
      />
    </View>
  );
};

export default ProductsScreen;
