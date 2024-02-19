import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { ComponentModule } from '../components/component.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule,
        PageRoutingModule,
        ComponentModule,
        TranslateModule,
    ],
    providers: [],
    exports: [],
})
export class PageModule {}
