import { NgModule } from '@angular/core';
import {
    BrowserModule,
    provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [AppComponent, NavigationComponent],
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), MaterialModule],
    providers: [provideClientHydration(), provideAnimationsAsync()],
    bootstrap: [AppComponent],
    exports: [NavigationComponent],
})
export class AppModule {}
