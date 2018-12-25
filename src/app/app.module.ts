import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { AppInputDecoratorComponent } from './app-input-decorator.component';
import { ChildClickComponent } from './components/connection-to-child/connection-to-child.component';
import { TwoWayBindComponent } from './components/two-way-bind/two-way-bind.component';
import { PhoneComponent } from './components/4.1services-n-di/phone.component';
import { DataComponent } from '@components/4.3one-serveces-many-components/data.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AppInputDecoratorComponent,
    ChildClickComponent,
    TwoWayBindComponent,
    PhoneComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
