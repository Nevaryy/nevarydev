import { environment } from '../../../environments/environment';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nev-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    websiteRepoUrl = environment.websiteRepoUrl;
}
