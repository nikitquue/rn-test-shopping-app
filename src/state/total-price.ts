import {atom, useRecoilValue, useSetRecoilState} from 'recoil';

const TOTAL_PRICE_ATOM = 'total-price';

export const TotalPriceAtom = atom<number>({
  key: TOTAL_PRICE_ATOM,
  default: 0,
});

export const useSetTotalPrice = () => useSetRecoilState(TotalPriceAtom);

export const useTotalPrice = () => useRecoilValue(TotalPriceAtom);
