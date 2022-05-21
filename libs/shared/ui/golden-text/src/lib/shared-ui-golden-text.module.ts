import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldenTextComponent } from './golden-text/golden-text.component';

@NgModule({
  declarations: [GoldenTextComponent],
  exports: [GoldenTextComponent],
  imports: [CommonModule],
})
export class SharedUiGoldenTextModule { }
