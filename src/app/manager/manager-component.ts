import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { InventoryRoutingModule } from '../inventory/inventory-routing-module';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-manager-component',
  imports: [MatToolbar, InventoryRoutingModule, MatButtonModule],
  template: `<mat-toolbar color="accent" class="tool-bar">
      <a mat-button routerLink="home" routerLinkActive="active-link"> Manager's Dashboard </a>
      <a mat-button routerLink="users" routerLinkActive="active-link"> User Management </a>
      <a mat-button routerLink="receipts" routerLinkActive="active-link"> Receipt Lookup </a>
    </mat-toolbar>
    <router-outlet></router-outlet> `,
  styles: `
    .tool-bar {
      margin-top: 32px;
      display: flex;
      gap: 2rem;
    }
    .active-link {
      font-weight: bold;
      border-bottom: 2px solid #005005;
    }
  `,
})
export class ManagerComponent {}
