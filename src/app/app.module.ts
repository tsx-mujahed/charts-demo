import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guards/auth.guards';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  MicrosoftLoginProvider,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { NotAuthGuard } from './auth-guards/not-auth.guards';
import { SharedModule } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SocialLoginModule,
    SharedModule,
    FormsModule
  ],
  providers: [ 
    AuthGuard,NotAuthGuard,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('55735797224-ocomdnb3letgqu8dq0lncgnsfgchjvg4.apps.googleusercontent.com'),
          },
          {
            id: MicrosoftLoginProvider.PROVIDER_ID,
            provider: new MicrosoftLoginProvider('8159d9c8-4cf7-411c-b7e6-6730fd6438a2'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
