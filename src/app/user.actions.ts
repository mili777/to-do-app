import { createAction, props } from '@ngrx/store';

export const addID = createAction('[Item] Add Id', props<{ id: number }>());
export const getName = createAction('[Item] Get name', props<{ name: string }>());