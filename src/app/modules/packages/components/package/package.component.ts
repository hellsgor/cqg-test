import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IFullPackage } from '../../models';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageComponent {
  @Input() packageItem!: IFullPackage;

  @Input() isDependent: boolean = false;

  @Output() packageSelected: EventEmitter<IFullPackage> =
    new EventEmitter<IFullPackage>();

  @Output() packageUnselected: EventEmitter<IFullPackage> =
    new EventEmitter<IFullPackage>();

  public onMouseEnter() {
    if (this.packageItem.dependencyCount > 0) {
      this.packageSelected.emit(this.packageItem); // добавьте EventEmitter в компонент и соответствующее свойство
    }
  }

  public onMouseLeave() {
    this.removePackageHoverClass();
  }

  private removePackageHoverClass() {
    this.packageUnselected.emit(this.packageItem);
  }
}
