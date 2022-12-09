import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPlans } from '../state/app.actions';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
  constructor(private store: Store) {
    this.store.dispatch(loadPlans());
  }
}
