import { NgModule } from '@angular/core';
import { PluralizePipe } from './pluralize.pipe';
import { AbbreviateNumberPipe } from './abbreviate-number.pipe';

@NgModule({
  declarations: [PluralizePipe, AbbreviateNumberPipe],
  exports: [PluralizePipe, AbbreviateNumberPipe],
})
export class PipesModule {}
