import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumComponent } from "./num/num.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'szambe';
}
