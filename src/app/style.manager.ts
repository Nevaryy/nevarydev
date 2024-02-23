import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangeThemeSuccess } from './store/theme-state/theme.actions';

@Injectable({ providedIn: 'root' })
export class StyleManager {
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private store: Store
    ) {}

    setStyle(key: string, href: string) {
        if (!href) {
            return;
        }

        const oldLink = this.getExistingLinkElementByKey(key);
        if (oldLink) {
            const newLink = this.createLinkElementWithKey(key);
            newLink.setAttribute('href', `${href}.css`);
            newLink.onload = () => {
                this.document.head.removeChild(oldLink);
                this.store.dispatch(new ChangeThemeSuccess());
            };
        } else {
            const element = this.createLinkElementWithKey(key);
            element.setAttribute('href', `${href}.css`);
            element.onload = () => {
                this.store.dispatch(new ChangeThemeSuccess());
            };
        }
    }

    getExistingLinkElementByKey(key: string) {
        return this.document.head.querySelector(
            `link[rel="stylesheet"].${this.getClassNameForKey(key)}`
        );
    }

    createLinkElementWithKey(key: string) {
        const linkEl = this.document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.classList.add(this.getClassNameForKey(key));
        this.document.head.appendChild(linkEl);
        return linkEl;
    }

    getClassNameForKey(key: string) {
        return `style-manager-${key}`;
    }
}
