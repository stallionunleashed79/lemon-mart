import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { InventoryRoutingModule } from '../inventory/inventory-routing-module';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-manager-component',
  imports: [
    MatToolbar,
    InventoryRoutingModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    RouterOutlet,
    MatTooltipModule,
  ],
  template: `<mat-toolbar color="accent" class="tool-bar">
      <a mat-button routerLink="home" routerLinkActive="active-link"> Manager's Dashboard </a>
      <a mat-button routerLink="users" routerLinkActive="active-link"> User Management </a>
      <a mat-button routerLink="receipts" routerLinkActive="active-link"> Receipt Lookup </a>
      <span class="flex-spacer"></span>
      <button mat-mini-fab routerLink="/inventory" matTooltip="Inventory" aria-label="Inventory">
        <mat-icon>list</mat-icon>
      </button>
      <button mat-mini-fab routerLink="/pos" matTooltip="POS" aria- label="POS">
        <mat-icon>shopping_cart</mat-icon>
      </button>
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
