import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {WebShellModule} from "./web-shell.module";
import {getAppConfigProvider} from "../lib/shared/app-config.token";
import {environment} from "./environment";
import {ServiceWorkerModule} from "@angular/service-worker";
import {authInterceptorProvider} from "../lib/auth/auth.interceptor";
import {unauthorizedInterceptorProvider} from "../lib/auth/unauthorized.interceptor";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    WebShellModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    getAppConfigProvider(environment),
    authInterceptorProvider,
    unauthorizedInterceptorProvider
  ]
})
export class AppModule {}
