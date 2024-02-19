import { LocalStorageService } from './../../services/local-storage.service';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
import { ROOT_EFFECTS_INIT } from '@ngrx/effects';
import {
    ChangeTheme,
    ChangeThemeSuccess,
    LoadTheme,
    ThemeActionTypes,
} from './theme.actions';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAvaiableThemes, selectActiveTheme } from './theme.selectors';
import { Theme } from './theme.reducer';

@Injectable()
export class ThemeEffects {
    $init = createEffect(() =>
        this.actions$.pipe(
            ofType(ROOT_EFFECTS_INIT),
            map(() => {
                return new LoadTheme();
            })
        )
    );

    $loadTheme = createEffect(() =>
        this.actions$.pipe(
            ofType(ThemeActionTypes.LoadTheme),
            map(() => {
                let theme = this.LocalStorageService.getItem('theme');

                if (!theme) {
                    theme =
                        this.document.defaultView?.matchMedia &&
                        this.document.defaultView?.matchMedia(
                            '(prefers-color-scheme: light)'
                        ).matches
                            ? 'light'
                            : 'dark';
                }

                return new ChangeTheme(theme);
            })
        )
    );

    $changeTheme = createEffect(() =>
        this.actions$.pipe(
            ofType(ThemeActionTypes.ChangeTheme),
            map((action: ChangeTheme) => {
                this.LocalStorageService.setItem('theme', action.payload);
                this.document.body.classList.remove('dark', 'light');
                this.document.body.classList.add(action.payload);
                return new ChangeThemeSuccess(action.payload);
            })
        )
    );

    $toggleTheme = createEffect(() =>
        this.actions$.pipe(
            ofType(ThemeActionTypes.ToggleTheme),
            withLatestFrom(
                this.store.select(selectActiveTheme),
                this.store.select(selectAvaiableThemes)
            ),
            map(([, activeTheme, avaiableThemes]) => {
                const themes = avaiableThemes.filter(
                    (theme: Theme) => theme.name !== activeTheme?.name
                );

                return new ChangeTheme(themes[0].name);
            })
        )
    );

    constructor(
        private actions$: Actions,
        private LocalStorageService: LocalStorageService,
        private store: Store,
        @Inject(DOCUMENT) private document: Document
    ) {}
}
