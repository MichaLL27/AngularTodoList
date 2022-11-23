import { Component } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor(private ItemsService: ItemsService) {}
  onNewItem(inputElement: HTMLInputElement) {
    if (!inputElement.value) return '';
    this.ItemsService.addItem(inputElement.value);
    inputElement.value = '';
  }
}
