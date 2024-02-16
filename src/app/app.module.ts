import { NgModule } from '@angular/core';
import {
    BrowserModule,
    provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    providers: [provideClientHydration(), provideAnimationsAsync()],
    bootstrap: [AppComponent],
})
export class AppModule {}
