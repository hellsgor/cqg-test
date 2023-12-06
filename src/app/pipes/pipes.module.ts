import { NgModule } from '@angular/core';
import { PluralizePipe } from './pluralize.pipe';

@NgModule({
  declarations: [PluralizePipe],
  exports: [PluralizePipe],
})
export class PipesModule {}
