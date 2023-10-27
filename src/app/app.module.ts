import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {WebShellModule} from "./web-shell.module";
import {getAppConfigProvider} from "../lib/shared/app-config.token";
import {environment} from "./environment";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    WebShellModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    getAppConfigProvider(environment),
  ]
})
export class AppModule {}
