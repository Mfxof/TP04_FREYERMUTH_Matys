import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  @Output() filterChanged = new EventEmitter<string[]>();
  @Output() sortChanged = new EventEmitter<string>();
  @Output() tagSorted = new EventEmitter<string>();
  @Output() sortById = new EventEmitter<{ order: string }>();
  @Output() sortAlphabetically = new EventEmitter<{ order: string }>();

  tags = ['Animal', 'Véhicule', 'Nourriture'];
  selectedTags: string[] = [];
  sortOrder: string = 'asc';

  toggleTag(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index === -1) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags.splice(index, 1);
    }
    this.filterChanged.emit(this.selectedTags);
  }

  changeSortOrder(order: string) {
    this.sortOrder = order;
    this.sortChanged.emit(this.sortOrder);
  }

  changeSortByTag(event: Event) {
    const target = event.target as HTMLSelectElement;
    const tag = target.value;
    this.tagSorted.emit(tag);
  }

  triggerSortById(order: string) {
    this.sortById.emit({ order });
  }

  triggerSortAlphabetically(order: string) {
    this.sortAlphabetically.emit({ order });
  }
}
