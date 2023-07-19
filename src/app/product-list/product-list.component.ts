import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share(name: string) {
    window.alert(`${name} has been shared!`);
  }

  onNotify(name: string) {
    window.alert(`You will be notified when ${name} goes on sale`);
  }
}
