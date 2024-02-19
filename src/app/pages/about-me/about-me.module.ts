import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/components/component.module';
import { AboutMeComponent } from './about-me.component';
const routes: Routes = [
    {
        path: '',
        title: 'About me - NevaryDev',
        component: AboutMeComponent,
    },
];

@NgModule({
    declarations: [AboutMeComponent],
    imports: [CommonModule, ComponentModule, RouterModule.forChild(routes)],
    exports: [],
})
export class AboutMeModule {}
