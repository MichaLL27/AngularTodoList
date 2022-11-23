import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  items: Item[] = [
    { description: 'Call grandma', done: false },
    { description: 'Watch movie', done: true },
    { description: 'Create Angular aplication', done: false },
    { description: 'Walk the dog', done: false },
  ];

  addItem(newItemDesc: string) {
    this.items.unshift({ description: newItemDesc, done: false });
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  finishItem(index: number) {
    this.items[index].done = !this.items[index].done;
  }
}
