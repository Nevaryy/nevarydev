import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, SidenavComponent],
    imports: [CommonModule, MaterialModule, TranslateModule],
    exports: [
        MaterialModule,
        TranslateModule,
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
    ],
})
export class ComponentModule {}
