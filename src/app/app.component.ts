import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Component({
    selector: 'nev-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    constructor(private translationService: TranslationService) {
        this.translationService.initialize();
    }
}
