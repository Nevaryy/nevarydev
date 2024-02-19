import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot({
            router: routerReducer,
        }),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
    ],
    exports: [],
})
export class NevStoreModule {}
