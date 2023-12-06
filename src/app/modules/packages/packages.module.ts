import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetPackagesService } from './services';
import { PackageComponent } from './components/package/package.component';
import { PackagesComponent } from './packages.component';
import { CommonModule } from '@angular/common';
import { PackagesQueryService } from './services/packages-query.service';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [HttpClientModule, CommonModule, PipesModule],
  providers: [GetPackagesService, PackagesQueryService],
  declarations: [PackageComponent, PackagesComponent],
  exports: [PackageComponent, PackagesComponent],
})
export class PackagesModule {}
