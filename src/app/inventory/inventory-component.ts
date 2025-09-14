import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InventoryRoutingModule } from './inventory-routing-module';

@Component({
  selector: 'app-inventory-component',
  imports: [MatToolbar, MatButtonModule, RouterLink, MatIconModule, RouterOutlet, MatTooltipModule],
  templateUrl: './inventory-component.html',
  styleUrl: './inventory-component.scss',
})
export class InventoryComponent {}
