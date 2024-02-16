import { TranslationService } from './../../services/translation.service';
import { Component } from '@angular/core';

@Component({
    selector: 'nev-navigation',
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
    languages = this.translationService.languages;
    currentLanguage = this.translationService.currentLanguage;

    constructor(private translationService: TranslationService) {}

    public swapLanguage(language: string) {
        this.translationService.changeLanguage(language);
    }
}
