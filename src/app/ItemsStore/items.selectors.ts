import { createSelector } from '@ngrx/store';
import { Item } from '../item';

export const selectItem = (state: { item: Item }) => state;
export const selectDoubleItem = createSelector(
    selectItem,
  (state) => state
);