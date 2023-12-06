import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PackagesModule } from './modules/packages/packages.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PackagesModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
