import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nev-content',
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {}
