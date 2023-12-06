import { Component, OnInit } from '@angular/core';
import { IFullPackage } from './models';
import { GetPackagesService } from './services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  public packages$: Observable<IFullPackage[]> =
    this.getPackagesService.sendPack();

  constructor(private getPackagesService: GetPackagesService) {}

  ngOnInit(): void {
    this.packages$ = this.getPackagesService.getPackages();
  }

  public packagesTrackBy(index: number, packagesItem: IFullPackage): string {
    return packagesItem.id;
  }
}
