import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, SidenavComponent],
    imports: [CommonModule, MaterialModule, RouterModule, TranslateModule],
    exports: [
        MaterialModule,
        TranslateModule,
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
        RouterModule,
    ],
})
export class ComponentModule {}
