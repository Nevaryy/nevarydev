import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectThemeLoaded } from './store/theme-state/theme.selectors';
import { auditTime } from 'rxjs';

@Component({
    selector: 'nev-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    themeLoaded$ = this.store.select(selectThemeLoaded).pipe(auditTime(500));

    constructor(private store: Store) {}
}
