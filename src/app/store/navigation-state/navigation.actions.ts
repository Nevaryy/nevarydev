import { Action } from '@ngrx/store';
import { ENavigationMode } from 'src/app/models/enums/navigation-mode.enum';

export enum NavigationActionTypes {
    ChangeMode = '[Navigation] Change Mode',
    ChangeOpen = '[Navigation] Change Open',
    ToggleOpen = '[Navigation] Toggle Open',
}

export class NavigationChangeMode implements Action {
    readonly type = NavigationActionTypes.ChangeMode;
    constructor(public payload: ENavigationMode) {}
}

export class NavigationChangeOpen implements Action {
    readonly type = NavigationActionTypes.ChangeOpen;
    constructor(public payload: boolean) {}
}

export class NavigationToggleOpen implements Action {
    readonly type = NavigationActionTypes.ToggleOpen;
}

export type NavigationActions =
    | NavigationChangeMode
    | NavigationChangeOpen
    | NavigationToggleOpen;
