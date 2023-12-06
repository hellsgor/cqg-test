import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  forkJoin,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { IFullPackage, IPackage } from '../models';
import { PackagesQueryService } from './packages-query.service';

@Injectable()
export class GetPackagesService {
  public packages$: BehaviorSubject<IFullPackage[]> = new BehaviorSubject<
    IFullPackage[]
  >([]);

  constructor(private queryService: PackagesQueryService) {}

  public getPackages(): Observable<IFullPackage[]> {
    return this.queryService.packagesQuery().pipe(
      switchMap((packages: IPackage[]) => {
        return forkJoin(
          packages.map((packageItem: IPackage) => {
            if (!packageItem.dependencyCount) {
              return of({
                ...packageItem,
                dependencies: [],
                compositeName: '',
                name: '',
              });
            }
            return this.queryService.dependenciesQuery(packageItem.id).pipe(
              map((dependencies) => ({
                id: packageItem.id,
                weeklyDownloads: packageItem.weeklyDownloads,
                dependencyCount: packageItem.dependencyCount,
                dependencies,
                compositeName: '',
                name: '',
              }))
            );
          })
        );
      }),
      map((packages: IFullPackage[]) => {
        packages.forEach((packageItem: IFullPackage) => {
          const regExp = /(@[^\/]+\/)/;
          const match = packageItem.id.match(regExp);
          packageItem.compositeName = match ? match[0] : '';
          packageItem.name = match
            ? packageItem.id.replace(regExp, '')
            : packageItem.id;
        });
        this.packages$.next(packages);
        console.log(packages);
        return packages;
      }),
      catchError((error: unknown) => {
        console.error('error in source. Details: ' + error);
        return of([]);
      })
    );
  }

  public sendPack(): Observable<IFullPackage[]> {
    return this.packages$.asObservable();
  }
}
