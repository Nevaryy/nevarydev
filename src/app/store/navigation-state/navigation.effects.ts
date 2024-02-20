import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs';
import {
    NavigationActionTypes,
    NavigationChangeOpen,
} from './navigation.actions';
import { Store } from '@ngrx/store';
import { selectNavigationOpen } from './navigation.selectors';

@Injectable()
export class NavigationEffects {
    toggle$ = createEffect(() =>
        this.actions$.pipe(
            ofType(NavigationActionTypes.ToggleOpen),
            withLatestFrom(this.store.select(selectNavigationOpen)),
            map(([, open]) => {
                return new NavigationChangeOpen(!open);
            })
        )
    );

    constructor(private actions$: Actions, private store: Store) {}
}
