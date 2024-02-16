import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home - NevaryDev',
    },
    {
        path: 'about-me',
        component: AboutMeComponent,
        title: 'About Me - NevaryDev',
    },
    {
        path: 'imprint',
        component: ImprintComponent,
        title: 'Imprint - NevaryDev',
    },
    {
        path: 'impressum',
        title: 'Impressum - NevaryDev',
        component: ImprintComponent,
    },
    {
        path: 'projects',
        title: 'Projects - NevaryDev',
        component: ProjectsComponent,
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PageRoutingModule {}
