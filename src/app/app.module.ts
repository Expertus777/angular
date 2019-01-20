import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { AppInputDecoratorComponent } from './app-input-decorator.component';
import { ChildClickComponent } from './components/connection-to-child/connection-to-child.component';
import { TwoWayBindComponent } from './components/two-way-bind/two-way-bind.component';
import { PhoneComponent } from '@components//4.1services-n-di/phone.component';
import { DataComponent } from '@components/4.3one-serveces-many-components/data.component';
import { Phone51Component } from '@components/5.1formsModule-n-ngModel/forms-module-n-ng-model.component';
import { FormStatus } from '@components/5.3formStatus/form-status.component';
import { ReactiveComponent } from '@components/5.5reactiveForms/reactive-forms.component';
import { HttpClientComponent } from '@components/6.1httpClient-send-request/httpclient.component';
import { HomeComponent } from '@components/7.1routing/home.component';
import { AboutComponent } from '@components/7.1routing/about.component';
import { NotFoundComponent } from '@components/7.1routing/not-found.component';

import { LogService } from '@services/log.service';
import { DataService } from '@services/data.service';
import { UserService } from '@services/user.service';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', redirectTo: '/about', pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AppInputDecoratorComponent,
    ChildClickComponent,
    TwoWayBindComponent,
    PhoneComponent,
    DataComponent,
    Phone51Component,
    FormStatus,
    ReactiveComponent,
    HttpClientComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LogService,
    DataService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
