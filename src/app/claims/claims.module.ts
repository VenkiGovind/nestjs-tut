import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimComponent } from './claim/claim.component';
import { UnderWritingComponent } from './under-writing/under-writing.component';



@NgModule({
  declarations: [
    ClaimComponent,
    UnderWritingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClaimsModule { }
