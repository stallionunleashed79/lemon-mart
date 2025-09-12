import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-home-component',
  imports: [FlexLayoutModule, MatButtonModule],
  template: `<div fxLayout="column" fxLayoutAlign="center center">
    <span class="mat-display-2">Hello, Limoncul</span>
    <button mat-raised-button color="primary">Login</button>
  </div> `,
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
  ],
})
export class HomeComponent {}
