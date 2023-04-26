import {atom, useRecoilValue, useSetRecoilState} from 'recoil';
import {ShoppingCartItem} from './types';

const SHOPPING_CART_ITEMS_ATOM = 'shopping-cart-items-atom';

export const ShoppingCartItemsAtom = atom<
  [] | Array<ShoppingCartItem & {quantity: number}>
>({
  key: SHOPPING_CART_ITEMS_ATOM,
  default: [],
});

export const useSetShoppingCartItems = () =>
  useSetRecoilState(ShoppingCartItemsAtom);

export const useShoppingCartItems = () => useRecoilValue(ShoppingCartItemsAtom);
