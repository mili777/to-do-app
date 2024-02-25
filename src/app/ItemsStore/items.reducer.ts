import { createReducer, on } from '@ngrx/store';

import { addItems } from '../ItemsStore/items.actions';

let initialState: any;

export const counterReducer = createReducer(
  initialState,
  on(addItems, (state, action) => ({
    ...state,
    items: action
})))