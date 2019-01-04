import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { AppInputDecoratorComponent } from './app-input-decorator.component';
import { ChildClickComponent } from './components/connection-to-child/connection-to-child.component';
import { TwoWayBindComponent } from './components/two-way-bind/two-way-bind.component';
import { PhoneComponent } from '@components//4.1services-n-di/phone.component';
import { DataComponent } from '@components/4.3one-serveces-many-components/data.component';
import { LogService } from '@services/log.service';
import { DataService } from '@services/data.service';
import { Phone51Component } from '@components/5.1formsModule-n-ngModel/forms-module-n-ng-model.component';
import { FormStatus } from '@components/5.3formStatus/form-status.component';
import { ReactiveComponent } from '@components/5.5reactiveForms/reactive-forms.component';

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
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LogService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
