import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetPackagesService } from './services';
import { PackageComponent } from './components/package/package.component';
import { PackagesComponent } from './packages.component';

@NgModule({
  imports: [HttpClientModule],
  providers: [GetPackagesService],
  declarations: [PackageComponent, PackagesComponent],
  exports: [PackageComponent, PackagesComponent],
})
export class PackagesModule {}
