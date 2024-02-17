import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
    selector: 'nev-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    languages = this.translationService.languages;
    currentLanguage = this.translationService.currentLanguage;

    constructor(private translationService: TranslationService) {}

    public swapLanguage(language: string) {
        this.translationService.changeLanguage(language);
    }
}
