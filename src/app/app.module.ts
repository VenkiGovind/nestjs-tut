import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './employee/details/details.component';
import { PostsComponent } from './post/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberComponent } from './member/member.component';
import { PlansComponent } from './plans/plans.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { Store, StoreModule } from '@ngrx/store';
import { appReducer } from './state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './state/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    DetailsComponent,
    PostsComponent,
    MemberComponent,
    PlansComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ appState: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
    EffectsModule.forRoot([PostsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
