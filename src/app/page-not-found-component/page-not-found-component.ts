import { Component } from '@angular/core';
import { InventoryRoutingModule } from '../inventory/inventory-routing-module';

@Component({
  selector: 'app-page-not-found-component',
  imports: [InventoryRoutingModule],
  template: ` <p>This page doesn't exist. Go back to <a routerLink="/home">home</a></p> `,
  styles: ``,
})
export class PageNotFoundComponent {}
