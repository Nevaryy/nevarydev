import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class TitleService {
    constructor(private title: Title) {}

    public setTitle(title: string) {
        this.title.setTitle(title);
    }
}
