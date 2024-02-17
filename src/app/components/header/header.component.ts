import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
    selector: 'nev-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    languages = this.translationService.languages;
    currentLanguage = this.translationService.currentLanguage;
    isDark$ = this.themeService.isDark$;

    constructor(
        private translationService: TranslationService,
        private themeService: ThemeService
    ) {}

    public swapLanguage(language: string) {
        this.translationService.changeLanguage(language);
    }

    public toggleTheme() {
        this.themeService.toggleLightDark();
    }
}
