import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetPackagesService } from './services';
import { PackageComponent } from './components/package/package.component';
import { PackagesComponent } from './packages.component';
import { CommonModule } from '@angular/common';
import { PackagesQueryService } from './services/packages-query.service';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  providers: [GetPackagesService, PackagesQueryService],
  declarations: [PackageComponent, PackagesComponent],
  exports: [PackageComponent, PackagesComponent],
})
export class PackagesModule {}
