import { createFeatureSelector, createSelector } from '@ngrx/store';
import { THEME_FEATURE_KEY, ThemeState } from './theme.reducer';

export const selectTheme = createFeatureSelector<ThemeState>(THEME_FEATURE_KEY);

export const selectThemeLoaded = createSelector(
    selectTheme,
    (state: ThemeState) => state.loaded
);

export const selectThemeName = createSelector(
    selectTheme,
    (state: ThemeState) => state.selectedTheme
);

export const selectActiveTheme = createSelector(
    selectTheme,
    (state: ThemeState) =>
        state.avaiableThemes.find((theme) => theme.name === state.selectedTheme)
);

export const selectIsDark = createSelector(
    selectTheme,
    (state: ThemeState) => state.isDark
);

export const selectAvaiableThemes = createSelector(
    selectTheme,
    (state: ThemeState) => state.avaiableThemes ?? []
);
