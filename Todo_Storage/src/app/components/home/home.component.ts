import { Component, OnInit, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  data = {
    todo: ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'],
    done: ['Get up', 'Brush teeth', 'Take a shower', 'Walk dog'],
    ongoing: ['Check e-mail'],
  };

  constructor() {}

  ngOnInit() {
    this.setItem();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      Object.keys(this.data).forEach(key => {
        localStorage.setItem(key, JSON.stringify(this.data[key]));
      });
    }
  }

  addTodo(item) {
    this.data.todo.push(item.value);
    item.value = '';
    localStorage.setItem('todo', JSON.stringify(this.data.todo));
  }

  setItem() {
    Object.keys(this.data).forEach(key => {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(this.data[key]));
      } else {
        this.data[key] = JSON.parse(localStorage.getItem(key));
      }
    });
  }
}
