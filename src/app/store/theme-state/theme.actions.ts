import { Action } from '@ngrx/store';

export enum ThemeActionTypes {
    ChangeTheme = '[Theme] Change Theme',
    ChangeThemeSuccess = '[Theme] Change Theme Success',
    ToggleTheme = '[Theme] Toggle Theme',
}

export class ChangeTheme implements Action {
    readonly type = ThemeActionTypes.ChangeTheme;
    constructor(public payload: string) {}
}

export class ChangeThemeSuccess implements Action {
    readonly type = ThemeActionTypes.ChangeThemeSuccess;
}

export class ToggleTheme implements Action {
    readonly type = ThemeActionTypes.ToggleTheme;
}

export type ThemeActions = ChangeTheme | ToggleTheme | ChangeThemeSuccess;
