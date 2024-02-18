import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';
import { ThemeService } from './services/theme.service';

@Component({
    selector: 'nev-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    constructor(
        private translationService: TranslationService,
        private themeService: ThemeService
    ) {
        this.translationService.initialize();
        this.themeService.initialize();
    }
}
