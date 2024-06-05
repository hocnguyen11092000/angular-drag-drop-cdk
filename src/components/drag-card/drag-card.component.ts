import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'drag-card',
  templateUrl: './drag-card.component.html',
  styleUrls: ['./drag-card.component.scss'],
  standalone: true,
})
export class DragCardComponent implements OnInit {
  @Input() issue!: any;

  constructor() {}

  ngOnInit() {}
}
