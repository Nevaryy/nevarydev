import { LANGUAGE_KEY } from './translation.service';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    public readonly languageKey = LANGUAGE_KEY;
    public readonly themeKey = 'theme';

    constructor(@Inject(DOCUMENT) private document: Document) {}

    getItem(key: string) {
        return this.document.defaultView?.localStorage?.getItem(key);
    }

    setItem(key: string, value: string) {
        return this.document.defaultView?.localStorage?.setItem(key, value);
    }
}
