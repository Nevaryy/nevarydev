import { NgModule } from '@angular/core';
import {
    BrowserModule,
    provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { PageModule } from './pages/page.module';
import { ComponentModule } from './components/component.module';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        MaterialModule,
        ComponentModule,
        PageModule,
    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
        provideHttpClient(withFetch()),
    ],
    bootstrap: [AppComponent],
    exports: [MaterialModule, ComponentModule, PageModule],
})
export class AppModule {}
