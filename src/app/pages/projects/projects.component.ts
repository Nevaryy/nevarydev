import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nev-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {}
