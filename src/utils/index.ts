import {ShoppingCartItem} from '../state/types';

export const removeItemAtIndex = (
  arr: Array<ShoppingCartItem & {quantity: number}>,
  id: string,
) => {
  const items = [...arr];
  const index = items.findIndex(itm => itm.id === id);
  if (index !== -1) {
    if (items[index].quantity > 1) {
      items[index].quantity -= 1;
    } else {
      items.splice(index, 1);
    }
  }
  return [...items];
};

export const addItemToCart = (
  arr: Array<ShoppingCartItem & {quantity: number}>,
  item: ShoppingCartItem,
) => {
  const items = [...arr];
  const index = items.findIndex(itm => Number(itm.id) === Number(item.id));

  if (index >= 0) {
    items[index].quantity += 1;
  } else {
    items.push({...item, quantity: 1});
  }
  return items;
};

export const countQuantity = (
  arr: Array<ShoppingCartItem & {quantity: number}>,
) => {
  let quantity = 0;
  arr.forEach(element => (quantity += element.quantity));
  return quantity;
};
