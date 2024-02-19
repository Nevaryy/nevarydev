import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor(@Inject(DOCUMENT) private document: Document) {}

    getItem(key: string) {
        return this.document.defaultView?.localStorage?.getItem(key);
    }

    setItem(key: string, value: string) {
        return this.document.defaultView?.localStorage?.setItem(key, value);
    }
}
