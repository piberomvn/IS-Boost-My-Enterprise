import { NgModule } from '@angular/core';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatListModule
]


@NgModule({
  imports: [MaterialComponents
],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
