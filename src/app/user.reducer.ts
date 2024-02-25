import { createReducer, on } from '@ngrx/store';
import { addID, getName } from './user.actions';

export const initialStateId = 0;
export const idReducer = createReducer(
  initialStateId,
  on(addID, (state, { id }) => id)
);

export const initialStateName = "unknown";
export const nameReducer = createReducer(
  initialStateName,
  on(getName, (state, { name }) => name)
);