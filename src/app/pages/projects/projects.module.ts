import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/components/component.module';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
    {
        path: '',
        title: 'Projects - NevaryDev',
        component: ProjectsComponent,
    },
];

@NgModule({
    declarations: [ProjectsComponent],
    imports: [CommonModule, ComponentModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProjectsModule {}
