import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { IPackage, IUrl } from '../models';

@Injectable()
export class GetPackagesService {
  public packages$: BehaviorSubject<IPackage[]> = new BehaviorSubject<
    IPackage[]
  >([]);

  constructor(private readonly http: HttpClient) {}

  public getPackages({ protocol, host, port }: IUrl): Observable<IPackage[]> {
    return this.http
      .get<IPackage[]>(`${protocol}://${host}:${port}/packages`)
      .pipe(
        map((packages: IPackage[]) => {
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
}
