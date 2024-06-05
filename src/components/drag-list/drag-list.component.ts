import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDropListGroup,
  CdkDropList,
  CdkDrag,
  copyArrayItem,
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { DragCardComponent } from '../drag-card/drag-card.component';

@Component({
  selector: '[drag-list]',
  templateUrl: './drag-list.component.html',
  styleUrls: ['./drag-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgFor, CdkDropListGroup, CdkDropList, CdkDrag, DragCardComponent],
})
export class DragList implements OnInit {
  @Input() lane: any;
  @Input() col: any;
  @Input() list!: CdkDropListGroup<any>;

  constructor() {}

  ngOnInit() {
    // console.log(this.list._items);
  }

  drop(event: CdkDragDrop<any[]>) {
    let isMovingInsideTheSameList = event.previousContainer === event.container;
    if (isMovingInsideTheSameList) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const dropIndex = +event.container.id;

      if (+this.col > 1) {
        Array.from(new Array(+this.col - 1)).forEach((_, index) => {
          copyArrayItem(
            event.previousContainer.data,
            [...this.list._items][dropIndex + index].data,
            event.previousIndex,
            event.currentIndex
          );
        });
      }
    }
  }
}
