import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SETTINGS_FEATURE_KEY, SettingsState } from './settings.reducer';

export const selectTheme =
    createFeatureSelector<SettingsState>(SETTINGS_FEATURE_KEY);

export const selectLanguage = createSelector(
    selectTheme,
    (state: SettingsState) => state.language
);
