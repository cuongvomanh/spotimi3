import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {UnauthorizedModalComponent} from "./unauthorized-modal.component";

@NgModule({
  imports: [CommonModule, NzModalModule, NzButtonModule],
  declarations: [UnauthorizedModalComponent],
  exports: [UnauthorizedModalComponent]
})
export class UnauthorizedModalModule {}
