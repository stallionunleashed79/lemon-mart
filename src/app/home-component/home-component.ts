import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InventoryRoutingModule } from '../inventory/inventory-routing-module';

@Component({
  selector: 'app-home-component',
  imports: [FlexLayoutModule, MatButtonModule, InventoryRoutingModule],
  template: `<div fxLayout="column" fxLayoutAlign="center center">
    <span class="mat-display-2">Hello, Limoncul</span>
    <button mat-raised-button color="primary" routerLink="/manager">Login as Manager</button>
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
