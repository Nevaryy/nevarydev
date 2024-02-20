import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NAVIGATION_FEATURE_KEY, NavigationState } from './navigation.reducer';

export const selectNavigation = createFeatureSelector<NavigationState>(
    NAVIGATION_FEATURE_KEY
);

export const selectNavigationOpen = createSelector(
    selectNavigation,
    (state: NavigationState) => state.open
);

export const selectNavigationMode = createSelector(
    selectNavigation,
    (state: NavigationState) => state.mode
);
