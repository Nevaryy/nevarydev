import { LocalStorageService } from './../../services/local-storage.service';
import { Inject, Injectable } from '@angular/core';
import {
    Actions,
    ROOT_EFFECTS_INIT,
    createEffect,
    ofType,
} from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
import { ChangeTheme, LoadTheme, ThemeActionTypes } from './theme.actions';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAvaiableThemes, selectActiveTheme } from './theme.selectors';
import { Theme } from './theme.reducer';
import { StyleManager } from 'src/app/style.manager';

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
                let theme;
                try {
                    theme = this.LocalStorageService.getItem(
                        this.LocalStorageService.themeKey
                    );
                } catch (e) {
                    theme = null;
                }

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

    $changeTheme = createEffect(
        () =>
            this.actions$.pipe(
                ofType(ThemeActionTypes.ChangeTheme),
                map((action: ChangeTheme) => {
                    this.LocalStorageService.setItem(
                        this.LocalStorageService.themeKey,
                        action.payload
                    );
                    this.styleManager.setStyle(
                        this.LocalStorageService.themeKey,
                        action.payload
                    );
                })
            ),
        { dispatch: false }
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
        @Inject(DOCUMENT) private document: Document,
        private styleManager: StyleManager
    ) {}
}
