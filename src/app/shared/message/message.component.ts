import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="ui-message ui-messages-error">
      {{ text }}
    </div>`
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && (this.control.dirty || this.control.touched);
  }

}
