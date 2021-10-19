import { NgModule } from '@angular/core';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field'
const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule
]


@NgModule({
  imports: [MaterialComponents
],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
