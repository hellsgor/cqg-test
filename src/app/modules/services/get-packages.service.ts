import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { IPackage, IUrl } from '../models';

@Injectable()
export class GetPackagesService {
  constructor(private readonly http: HttpClient) {}

  public getPackages({ protocol, host, port }: IUrl): Observable<IPackage[]> {
    return this.http
      .get<IPackage[]>(`${protocol}://${host}:${port}/packages`)
      .pipe(
        catchError((error: unknown) => {
          throw new Error('error in source. Details: ' + error);
        })
      );
  }
}
