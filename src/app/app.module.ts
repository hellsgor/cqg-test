import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PackagesModule } from './modules/packages/packages.module';
import { PackagesComponent } from './modules/packages/packages.component';

@NgModule({
  declarations: [AppComponent, PackagesComponent],
  imports: [BrowserModule, PackagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
