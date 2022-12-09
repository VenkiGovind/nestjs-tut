import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() employee: Employee | undefined;
  @Input() address: string = "";
}
