import { Component, OnInit } from '@angular/core';
import { IPackage } from './models';
import { GetPackagesService } from './services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  public packages: Observable<IPackage[]> = this.getPackagesService.getPackages(
    {
      protocol: 'http',
      host: 'localhost',
      port: 3000,
    }
  );

  constructor(private getPackagesService: GetPackagesService) {}

  ngOnInit(): void {
    this.getPackagesService.getPackages({
      protocol: 'http',
      host: 'localhost',
      port: 3000,
    });
    // .subscribe((response) => {
    //   console.log(response);
    //   // this.packages = response;
    // });
  }
}
