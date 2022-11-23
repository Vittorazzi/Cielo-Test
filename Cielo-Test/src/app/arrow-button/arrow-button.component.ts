import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.css']
})

export class ArrowButtonComponent {

  @Output() changeStatus = new EventEmitter();

  changeStatusComponent() {
    this.changeStatus.emit();
  }
}
