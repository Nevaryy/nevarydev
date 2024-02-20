import { Action } from '@ngrx/store';

export enum SettingsActionTypes {
    LoadLanguage = '[Settings] Load Language',
    ChangeLanguage = '[Settings] Change Language',
}

export class LoadLanguage implements Action {
    readonly type = SettingsActionTypes.LoadLanguage;
}

export class ChangeLanguage implements Action {
    readonly type = SettingsActionTypes.ChangeLanguage;
    constructor(public payload: string) {}
}

export type SettingsActions = LoadLanguage | ChangeLanguage;
