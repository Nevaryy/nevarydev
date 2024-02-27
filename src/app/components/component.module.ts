import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { QuicknavComponent } from './quicknav/quicknav.component';
import { ContentComponent } from './content/content.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
        QuicknavComponent,
        ContentComponent,
    ],
    imports: [CommonModule, MaterialModule, RouterModule, TranslateModule],
    exports: [
        MaterialModule,
        TranslateModule,
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
        RouterModule,
        QuicknavComponent,
        ContentComponent,
    ],
})
export class ComponentModule {}
