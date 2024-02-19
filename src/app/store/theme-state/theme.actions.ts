import { Action } from '@ngrx/store';

export enum ThemeActionTypes {
    LoadTheme = '[Theme] Load Theme',
    ChangeTheme = '[Theme] Change Theme',
    ChangeThemeSuccess = '[Theme] Change Theme Success',
    ToggleTheme = '[Theme] Toggle Theme',
}

export class LoadTheme implements Action {
    readonly type = ThemeActionTypes.LoadTheme;
}

export class ChangeTheme implements Action {
    readonly type = ThemeActionTypes.ChangeTheme;
    constructor(public payload: string) {}
}

export class ChangeThemeSuccess implements Action {
    readonly type = ThemeActionTypes.ChangeThemeSuccess;
    constructor(public payload: string) {}
}

export class ToggleTheme implements Action {
    readonly type = ThemeActionTypes.ToggleTheme;
}

export type ThemeActions = LoadTheme | ChangeTheme | ChangeThemeSuccess;
