import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'nev-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
    @ViewChild('drawer') drawer: MatDrawer | undefined;

    public toggle() {
        this.drawer?.toggle();
    }
}
