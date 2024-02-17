import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export const LANGUAGE_KEY = 'language';

@Injectable({
    providedIn: 'root',
})
export class TranslationService {
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private translateService: TranslateService
    ) {}

    public get languages() {
        return this.translateService.getLangs();
    }

    public initialize() {
        this.translateService.addLangs(['en', 'de']);
        const localStorage = this.document.defaultView?.localStorage;

        const userLang =
            localStorage?.getItem(LANGUAGE_KEY) ||
            this.translateService.getBrowserLang() ||
            'en';

        const languageCode = userLang.split('-')[0];
        localStorage?.setItem(LANGUAGE_KEY, languageCode);

        this.translateService.setDefaultLang(languageCode);
        return this.translateService.use(languageCode);
    }

    public get currentLanguage() {
        return this.translateService.currentLang;
    }

    public changeLanguage(language: string) {
        const localStorage = this.document.defaultView?.localStorage;
        localStorage?.setItem(LANGUAGE_KEY, language);
        return this.translateService.use(language);
    }

    public get(key: string) {
        return this.translateService.instant(key);
    }
}
