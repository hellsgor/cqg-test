import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IFullPackage } from './models';
import { GetPackagesService } from './services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackagesComponent implements OnInit {
  public packages$: Observable<IFullPackage[]> =
    this.getPackagesService.sendPack();

  public selectedPackageDependenciesArray: string[] = [];

  public search: string = '';

  constructor(private getPackagesService: GetPackagesService) {}

  ngOnInit(): void {
    this.packages$ = this.getPackagesService.getPackages();
  }

  onSelectPackage(packageItem: IFullPackage) {
    this.selectedPackageDependenciesArray = packageItem.dependencies;
  }

  public packagesTrackBy(index: number, packagesItem: IFullPackage): string {
    return packagesItem.id;
  }

  onUnselectPackage() {
    this.selectedPackageDependenciesArray = [];
  }
}
