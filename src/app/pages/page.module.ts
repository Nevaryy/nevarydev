import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { ComponentModule } from '../components/component.module';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImprintComponent } from './imprint/imprint.component';

@NgModule({
    declarations: [HomeComponent, AboutMeComponent, ImprintComponent],
    imports: [CommonModule, PageRoutingModule, ComponentModule],
    providers: [],
})
export class PageModule {}
