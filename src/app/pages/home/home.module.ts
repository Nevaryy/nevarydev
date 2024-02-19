import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentModule } from 'src/app/components/component.module';

const routes: Routes = [
    {
        path: '',
        title: 'Home - NevaryDev',
        component: HomeComponent,
    },
];

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, ComponentModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeModule {}
