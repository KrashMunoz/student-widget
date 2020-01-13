import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6LdX-84UAAAAAMbN_9VyTuMPTvPYnYTaB8n0vUFs',
    } as RecaptchaSettings,
  }]})
export class AppModule { }
