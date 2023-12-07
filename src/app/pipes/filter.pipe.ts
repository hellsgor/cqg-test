import { Pipe, PipeTransform } from '@angular/core';
import { IFullPackage } from '../modules/packages/models';

@Pipe({
  name: 'packagesFilter',
})
export class PackagesFilterPipe implements PipeTransform {
  transform(packages: IFullPackage[], search: string = ''): IFullPackage[] {
    if (search.trim() === '') {
      return packages;
    }

    return packages.filter((packagesItem: IFullPackage) =>
      packagesItem.id.toLowerCase().includes(search.toLowerCase())
    );
  }
}
