import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'about-me',
        loadChildren: () =>
            import('./about-me/about-me.module').then((m) => m.AboutMeModule),
    },
    {
        path: 'imprint',
        loadChildren: () =>
            import('./imprint/imprint.module').then((m) => m.ImprintModule),
    },
    {
        path: 'impressum',
        loadChildren: () =>
            import('./imprint/imprint.module').then((m) => m.ImprintModule),
    },
    {
        path: 'projects',
        loadChildren: () =>
            import('./projects/projects.module').then((m) => m.ProjectsModule),
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
