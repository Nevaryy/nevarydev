import { ThemeActionTypes, ThemeActions } from './theme.actions';
export const THEME_FEATURE_KEY = 'Theme';

export type Theme = {
    name: string;
    isDark: boolean;
};

export interface ThemeState {
    loaded: boolean;
    selectedTheme?: string;
    isDark?: boolean;
    avaiableThemes: Theme[];
}

const avaiableThemes = [
    { name: 'dark', isDark: true },
    { name: 'light', isDark: false },
];

export const initialState: ThemeState = {
    loaded: false,
    avaiableThemes: avaiableThemes,
};

export function themeReducer(
    state = initialState,
    action: ThemeActions
): ThemeState {
    switch (action.type) {
        case ThemeActionTypes.ChangeTheme: {
            const seletectedTheme = state.avaiableThemes.find(
                (theme) => theme.name === action.payload
            );
            if (!seletectedTheme) return state;

            return {
                ...state,
                selectedTheme: seletectedTheme?.name,
                isDark: seletectedTheme?.isDark,
                loaded: false,
            };
        }

        case ThemeActionTypes.ChangeThemeSuccess: {
            return {
                ...state,
                loaded: true,
            };
        }

        default: {
            return state;
        }
    }
}
