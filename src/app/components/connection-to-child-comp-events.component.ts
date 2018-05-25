import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-event',
  templateUrl: './connection-to-child-comp-events.component.html'
})

export class ChildEventComponent {
  @Output() OnButtonClick = new EventEmitter<boolean>();
  @Output() OnSetNull = new EventEmitter();
  @Output() OnChangeTitle = new EventEmitter<string>();
  buttonClick(value: any): void {
    this.OnButtonClick.emit(value);
  }
  setNull(): void {
    this.OnSetNull.emit(0);
  }

  changeTitle(e: any): void {
    this.OnChangeTitle.emit(e.srcElement.value);
  }
}
