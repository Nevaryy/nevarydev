import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export const THEME_KEY = 'theme';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    public isDark$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        true
    );

    constructor(@Inject(DOCUMENT) private document: Document) {}

    initialize(): Observable<any> {
        const localStorage = this.document.defaultView?.localStorage;
        const theme = localStorage?.getItem(THEME_KEY) || 'dark';
        return of(this.setTheme(theme));
    }

    setTheme(newTheme: string) {
        const localStorage = this.document.defaultView?.localStorage;
        const currentTheme = localStorage?.getItem(THEME_KEY);

        if (currentTheme) {
            this.document.body.classList.remove(currentTheme);
        }

        this.document.body.classList.add(newTheme);
        localStorage?.setItem(THEME_KEY, newTheme);
        return newTheme;
    }

    toggleLightDark() {
        const localStorage = this.document.defaultView?.localStorage;
        const theme = localStorage?.getItem(THEME_KEY) || 'dark';

        return this.setTheme(theme === 'dark' ? 'light' : 'dark');
    }
}
