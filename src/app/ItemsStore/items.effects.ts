import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs';

import { addItems } from '../ItemsStore/items.actions';
import { selectItem } from './items.selectors';
import { Item } from '../item';
import axios from 'axios';
//import { selectCount } from './counter.selectors';

@Injectable()
export class ItemEffects {

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addItems),
        withLatestFrom(this.store.select(selectItem)),
        tap(([action]) => {
          console.log(action);
            axios({
              method: 'post',
              url: 'http://localhost:3000/tasks',
              data: {
                id: action.item.id,
                description: action.item.description,
                done: action.item.done,
                owner_id: action.item.owner_id
              }
            });
                })
              ),
            { dispatch: false }
          );

  constructor(
    private actions$: Actions,
    private store: Store<{ item: Item }>
  ) {}
}