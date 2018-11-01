import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from "./store/store.module";
import {AdminModule} from './admin/admin.module'
import { StoreFirstGuard } from "./storeFirst.guard";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
