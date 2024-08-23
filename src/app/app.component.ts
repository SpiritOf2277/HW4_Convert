import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RatesComponent } from './rates/rates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HW4_Convert';
}
