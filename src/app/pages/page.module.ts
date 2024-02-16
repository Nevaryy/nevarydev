import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { ComponentModule } from '../components/component.module';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImprintComponent } from './imprint/imprint.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
    declarations: [
        HomeComponent,
        AboutMeComponent,
        ImprintComponent,
        ProjectsComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        PageRoutingModule,
        ComponentModule,
        TranslateModule,
    ],
    providers: [],
    exports: [ProjectsComponent, ProjectsComponent],
})
export class PageModule {}
