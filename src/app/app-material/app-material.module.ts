import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const MatComponents = [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule]


@NgModule({
  imports: [
    MatComponents
  ],
  exports: [
    MatComponents
  ]
})

export class AppMaterialModule { }
