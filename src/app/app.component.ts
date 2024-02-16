import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';
@Component({
    selector: 'nev-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'nevarydev';

    constructor(private TranslationService: TranslationService) {
        this.TranslationService.initialize();
    }
}
