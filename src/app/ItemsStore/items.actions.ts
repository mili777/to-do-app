import { createAction, props } from '@ngrx/store';
import { Item } from '../item';

export const addItems = createAction(
    '[Item] Add Items',
    props<{item: Item}>()
  );