import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IPackage } from '../../models';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageComponent implements OnInit {
  @Input() package: IPackage | undefined;

  constructor() {}

  ngOnInit(): void {}
}
