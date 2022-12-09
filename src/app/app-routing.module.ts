import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './employee/details/details.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { PlansComponent } from './plans/plans.component';
import { PostsComponent } from './post/posts/posts.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'employee', component: EmployeeComponent, children: [
      { path: 'details', component: DetailsComponent }
    ]
  },
  {
    path: 'posts', component: PostsComponent
  },

  {
    path: 'members', component: MemberComponent
  },

  {
    path: 'plans', component: PlansComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
