import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './local-storage.service';

export const LANGUAGE_KEY = 'language';

@Injectable({
    providedIn: 'root',
})
export class TranslationService {
    constructor(
        private translateService: TranslateService,
        private localStorageService: LocalStorageService
    ) {}

    public get languages() {
        return this.translateService.getLangs();
    }

    public initialize() {
        this.translateService.addLangs(['en', 'de']);

        const userLang =
            this.localStorageService.getItem(LANGUAGE_KEY) ||
            this.translateService.getBrowserLang() ||
            'en';

        const languageCode = userLang.split('-')[0];
        this.localStorageService.setItem(LANGUAGE_KEY, languageCode);

        this.translateService.setDefaultLang(languageCode);
        return this.translateService.use(languageCode);
    }

    public get currentLanguage() {
        return this.translateService.currentLang;
    }

    public changeLanguage(language: string) {
        this.localStorageService.setItem(LANGUAGE_KEY, language);
        return this.translateService.use(language);
    }

    public get(key: string) {
        return this.translateService.instant(key);
    }
}
