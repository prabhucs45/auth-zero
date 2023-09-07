import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LogoutComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-a3cndlmrjbvwmk03.us.auth0.com',
      clientId: 'NoGutPlUI5ly6mA5Xf1nCEiXMfIA7Dga',
      authorizationParams: {
        redirect_uri: window.location.origin + '/#/welcome'
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
