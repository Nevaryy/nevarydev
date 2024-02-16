import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const LANGUAGE_KEY = 'language';

@Component({
    selector: 'nev-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'nevarydev';

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private translateService: TranslateService
    ) {
        const localStorage = this.document.defaultView?.localStorage;

        const userLang =
            localStorage?.getItem(LANGUAGE_KEY) ||
            this.translateService.getBrowserLang() ||
            'en';

        const languageCode = userLang.split('-')[0];
        localStorage?.setItem(LANGUAGE_KEY, languageCode);

        this.translateService.setDefaultLang(languageCode);
        this.translateService.use(languageCode);
    }
}
