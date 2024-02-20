import { SettingsActionTypes, SettingsActions } from './settings.actions';
export const SETTINGS_FEATURE_KEY = 'Settings';

export interface SettingsState {
    language: string;
}

export const initialState: SettingsState = {
    language: 'en',
};

export function settingsReducer(
    state = initialState,
    action: SettingsActions
): SettingsState {
    switch (action.type) {
        case SettingsActionTypes.ChangeLanguage: {
            return {
                ...state,
                language: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}
