import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { AppInputDecoratorComponent } from './app-input-decorator.component';
import { ChildClickComponent } from './components/connection-to-child/connection-to-child.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AppInputDecoratorComponent,
    ChildClickComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
