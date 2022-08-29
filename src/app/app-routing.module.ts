import { QuestionComponent } from './question/question.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome-page', pathMatch: 'full' },
  {
    path: 'welcome-page',
    component: WelcomePageComponent,
  },
  { path: 'question', component: QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
