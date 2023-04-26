import {BASE_URL} from '../constants';

export const getProducts = async () => {
  try {
    let response = await fetch(`${BASE_URL}/products`);
    let products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (id: number) => {
  try {
    let response = await fetch(`${BASE_URL}/products/${id}`);
    let product = await response.json();
    return product;
  } catch (error) {
    console.error(error);
  }
};
