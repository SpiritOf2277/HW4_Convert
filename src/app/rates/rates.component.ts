import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent {
  @Input() accent: string = '';

  currencies = [
    { code: 'USD', rate: 1.12 },
    { code: 'EUR', rate: 0.94 },
    { code: 'GBP', rate: 0.83 },
    { code: 'JPY', rate: 139.66 },
    { code: 'CHF', rate: 0.98 },
  ];

  isAccent(currencyCode: string): boolean {
    return this.accent.toUpperCase() === currencyCode.toUpperCase();
  }
}
