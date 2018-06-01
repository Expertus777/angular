import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-click-comp',
  templateUrl: './connection-to-child.component.html'
})

export class ChildClickComponent {
  @Output() OnCorrelation = new EventEmitter<any>();
  @Output() ResetTitle = new EventEmitter<any>();
  correlation(increased: boolean, e: any) {
    this.OnCorrelation.emit({increased, e});
  }
  resetTitle() {
    this.ResetTitle.emit();
  }
}
