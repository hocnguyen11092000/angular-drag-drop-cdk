import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MOCK_DATA } from '../../mocks';
import { DragList } from '../drag-list/drag-list.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    DragList,
    FormsModule,
  ],
})
export class DragComponent implements OnInit {
  col = 1;
  lanes!: any[];
  constructor() {}

  ngOnInit() {
    this.lanes = MOCK_DATA;
  }
}
