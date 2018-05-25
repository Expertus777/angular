import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ChildComponent} from './child.component';
import {AppInputDecoratorComponent} from './app-input-decorator.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AppInputDecoratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
