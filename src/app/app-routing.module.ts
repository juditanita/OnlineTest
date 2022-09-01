import { DisplayTestComponent } from './display-test/display-test.component';
import { AddTestComponent } from './add-test/add-test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome-page', pathMatch: 'full' },
  {
    path: 'welcome-page',
    component: WelcomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin-page',
    component: AdminPageComponent,
    children: [
      { path: 'add-test', component: AddTestComponent },
      { path: 'display-test', component: DisplayTestComponent },
    ],
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },

  {
    path: 'question',
    component: QuestionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
