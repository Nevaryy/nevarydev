import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nev-imprint',
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImprintComponent {}
