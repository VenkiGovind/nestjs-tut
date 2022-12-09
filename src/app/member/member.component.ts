import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchMembers } from '../state/app.actions';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {
  constructor(private store: Store) {
    this.store.dispatch(fetchMembers());
  }
}
