import { NavigationChangeOpen } from './../../store/navigation-state/navigation.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { NavigationToggleOpen } from 'src/app/store/navigation-state/navigation.actions';
import {
    selectNavigationMode,
    selectNavigationOpen,
} from 'src/app/store/navigation-state/navigation.selectors';

@Component({
    selector: 'nev-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
    mode$ = this.store.select(selectNavigationMode).pipe(
        filter((mode) => !!mode),
        map((mode) => mode as string)
    );
    open$ = this.store.select(selectNavigationOpen);

    constructor(private store: Store) {}

    public toggle() {
        this.store.dispatch(new NavigationToggleOpen());
    }

    public close() {
        this.store.dispatch(new NavigationChangeOpen(false));
    }
}
