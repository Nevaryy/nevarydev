import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslationService } from 'src/app/services/translation.service';
import { NavigationToggleOpen } from 'src/app/store/navigation-state/navigation.actions';
import { ChangeLanguage } from 'src/app/store/settings-state/settings.actions';
import { ToggleTheme } from 'src/app/store/theme-state/theme.actions';
import { selectIsDark } from 'src/app/store/theme-state/theme.selectors';

@Component({
    selector: 'nev-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    languages = this.translationService.languages;
    currentLanguage = this.translationService.currentLanguage;
    isDark$ = this.store.select(selectIsDark);

    constructor(
        private translationService: TranslationService,
        private store: Store
    ) {}

    public swapLanguage(language: string) {
        this.store.dispatch(new ChangeLanguage(language));
    }

    public toggleTheme() {
        this.store.dispatch(new ToggleTheme());
    }

    public toggleNav() {
        this.store.dispatch(new NavigationToggleOpen());
    }
}
