import { NgModule } from '@angular/core';
import { PluralizePipe } from './pluralize.pipe';
import { AbbreviateNumberPipe } from './abbreviate-number.pipe';
import { PackagesFilterPipe } from './filter.pipe';

@NgModule({
  declarations: [PluralizePipe, AbbreviateNumberPipe, PackagesFilterPipe],
  exports: [PluralizePipe, AbbreviateNumberPipe, PackagesFilterPipe],
})
export class PipesModule {}
