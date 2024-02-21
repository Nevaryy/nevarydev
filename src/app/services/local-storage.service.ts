import { LANGUAGE_KEY } from './translation.service';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    public readonly languageKey = LANGUAGE_KEY;
    public readonly themeKey = 'theme';

    private storage: Storage | undefined;

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.storage = this.document.defaultView?.localStorage;
    }

    getItem(key: string) {
        return this.storage?.getItem(key);
    }

    setItem(key: string, value: string) {
        return this.storage?.setItem(key, value);
    }
}
