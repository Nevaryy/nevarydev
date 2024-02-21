import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangeThemeSuccess } from './store/theme-state/theme.actions';
/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 */
@Injectable({ providedIn: 'root' })
export class StyleManager {
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private store: Store
    ) {}
    /**
     * Set the stylesheet with the specified key.
     */
    setStyle(key: string, href: string) {
        if (!href) {
            return;
        }
        this.getLinkElementForKey(key).setAttribute('href', `${href}.css`);
    }

    /**
     * Remove the stylesheet with the specified key.
     */
    removeStyle(key: string) {
        const existingLinkElement = this.getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            this.document.head.removeChild(existingLinkElement);
        }
    }

    getLinkElementForKey(key: string) {
        return (
            this.getExistingLinkElementByKey(key) ||
            this.createLinkElementWithKey(key)
        );
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
        linkEl.onload = () => {
            this.store.dispatch(new ChangeThemeSuccess());
        };
        this.document.head.appendChild(linkEl);
        return linkEl;
    }

    getClassNameForKey(key: string) {
        return `style-manager-${key}`;
    }
}
