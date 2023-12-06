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
              });
            }
            return this.queryService.dependenciesQuery(packageItem.id).pipe(
              map((dependencies) => ({
                ...packageItem,
                dependencies,
              }))
            );
          })
        );
      }),
      map((packages: IFullPackage[]) => {
        console.log('getPackages', packages);
        this.packages$.next(packages);
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
