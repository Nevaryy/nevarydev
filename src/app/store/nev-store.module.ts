import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { THEME_FEATURE_KEY, themeReducer } from './theme-state/theme.reducer';
import { ThemeEffects } from './theme-state/theme.effects';
import {
    SETTINGS_FEATURE_KEY,
    settingsReducer,
} from './settings-state/settings.reducer';
import { SettingsEffects } from './settings-state/settings.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot({
            router: routerReducer,
        }),

        StoreModule.forFeature(THEME_FEATURE_KEY, themeReducer),
        StoreModule.forFeature(SETTINGS_FEATURE_KEY, settingsReducer),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
        EffectsModule.forRoot([ThemeEffects, SettingsEffects]),
    ],
    exports: [],
})
export class NevStoreModule {}
