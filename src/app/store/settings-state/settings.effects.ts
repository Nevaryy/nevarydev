import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import {
    Actions,
    ROOT_EFFECTS_INIT,
    createEffect,
    ofType,
} from '@ngrx/effects';
import {
    ChangeLanguage,
    LoadLanguage,
    SettingsActionTypes,
} from './settings.actions';
import { map } from 'rxjs/internal/operators/map';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SettingsEffects {
    init$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROOT_EFFECTS_INIT),
            map(() => {
                this.translateService.addLangs(['en', 'de']);
                this.translateService.setDefaultLang('en');

                return new LoadLanguage();
            })
        )
    );

    loadLanguage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SettingsActionTypes.LoadLanguage),
            map(() => {
                const language = this.localStorageService.getItem(
                    this.localStorageService.languageKey
                );
                return new ChangeLanguage(language || 'en');
            })
        )
    );

    changeLanguage$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(SettingsActionTypes.ChangeLanguage),
                map((action: ChangeLanguage) => {
                    this.localStorageService.setItem(
                        this.localStorageService.languageKey,
                        action.payload
                    );
                    this.translateService.use(action.payload);
                })
            ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private localStorageService: LocalStorageService,
        private translateService: TranslateService
    ) {}
}
