import { Injectable } from '@angular/core';
import { IPackage, IUrl } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PackagesQueryService {
  private readonly url: IUrl = {
    protocol: 'http',
    host: 'localhost',
    port: 3000,
  };

  constructor(private readonly http: HttpClient) {}

  public packagesQuery(): Observable<IPackage[]> {
    return this.http.get<IPackage[]>(
      `${this.url.protocol}://${this.url.host}:${this.url.port}/packages`
    );
  }

  public dependenciesQuery(id: string): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.url.protocol}://${this.url.host}:${
        this.url.port
      }/packages/${encodeURIComponent(id)}/dependencies`
    );
  }
}
