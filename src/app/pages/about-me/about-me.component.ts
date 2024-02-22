import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nev-about-me',
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {}
