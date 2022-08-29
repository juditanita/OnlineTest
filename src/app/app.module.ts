import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBackgDirective } from './change-backg.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBackgDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
