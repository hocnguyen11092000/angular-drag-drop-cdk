import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragComponent } from '../components/drag/drag.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [DragComponent],
})
export class AppComponent {
  title = 'angular-editor';
}
