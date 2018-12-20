import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-bind.component.html'
})

export class TwoWayBindComponent {
  @Input() UserName: string;
  @Output() UserNameChange = new EventEmitter<string>();

  public onModalChange(e:any):void {
    console.log(e);
    this.UserNameChange
  }
}