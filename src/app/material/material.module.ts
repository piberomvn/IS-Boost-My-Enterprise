import { NgModule } from '@angular/core';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

const material = [
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule
]


@NgModule({
  imports: [material
],
  exports: [
    material
  ]
})
export class MaterialModule { }
