import { Component } from '@angular/core';

@Component({
  selector: 'blue-button',
  template: `
    <h2>Blue button component</h2>

    <button class="blue-button">Button</button>
  `,
  standalone: true,
  styles: [`
    .blue-button {
      background: blue;
    }

  `]
})
export class BlueButtonComponent  {

}
