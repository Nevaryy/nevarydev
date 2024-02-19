import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';
import { Store } from '@ngrx/store';
import { selectThemeLoaded } from './store/theme-state/theme.selectors';

@Component({
    selector: 'nev-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    themeLoaded$ = this.store.select(selectThemeLoaded);

    constructor(
        private translationService: TranslationService,
        private store: Store
    ) {
        this.translationService.initialize();
    }
}
