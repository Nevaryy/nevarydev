import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { ComponentModule } from '../components/component.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, PageRoutingModule, ComponentModule],
})
export class PageModule {}
