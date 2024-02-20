import { ENavigationMode } from 'src/app/models/enums/navigation-mode.enum';
import { NavigationActionTypes, NavigationActions } from './navigation.actions';

export const NAVIGATION_FEATURE_KEY = 'Navigation';

export interface NavigationState {
    open: boolean;
    mode: ENavigationMode;
}

export const initialState: NavigationState = {
    open: false,
    mode: ENavigationMode.Over,
};

export function navigationReducer(
    state = initialState,
    action: NavigationActions
): NavigationState {
    switch (action.type) {
        case NavigationActionTypes.ChangeMode: {
            return {
                ...state,
                mode: action.payload,
            };
        }

        case NavigationActionTypes.ChangeOpen: {
            return {
                ...state,
                open: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}
