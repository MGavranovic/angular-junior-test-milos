import { Component } from '@angular/core';
import { products } from 'src/app/products';
import { Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/model';

@Component({
  selector: 'app-new-component-milos',
  templateUrl: './new-component-milos.component.html',
  styleUrls: ['./new-component-milos.component.scss'],
})
export class NewComponentMilosComponent {
  boundary1 = '';
  boundary2 = '';
  @Output() newItemEvent = new EventEmitter<Array<IProduct>>();

  onClick(e: any): void {
    let newArr = [];
    for (let i = 0; i < products.length; i++) {
      let priceOfProduct = products[i].price;
      if (
        priceOfProduct > +this.boundary1 &&
        priceOfProduct < +this.boundary2
      ) {
        newArr.push(products[i]);
      }
    }
    this.newItemEvent.emit(newArr);
  }
}
