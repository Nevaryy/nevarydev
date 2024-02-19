import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/components/component.module';
import { ImprintComponent } from './imprint.component';

const routes: Routes = [
    {
        path: '',
        title: 'Imprint - NevaryDev',
        component: ImprintComponent,
    },
];

@NgModule({
    declarations: [ImprintComponent],
    imports: [CommonModule, ComponentModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ImprintModule {}
