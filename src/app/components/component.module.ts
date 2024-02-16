import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [NavigationComponent],
    imports: [CommonModule, MaterialModule, RouterModule, TranslateModule],
    exports: [NavigationComponent],
})
export class ComponentModule {}
