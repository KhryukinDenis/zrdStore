import { Product } from './../../models/product';
import { BaseService } from './../../services/base.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-shoping',
  templateUrl: './cart-shoping.component.html',
  styleUrls: ['./cart-shoping.component.css']
})
export class CartShopingComponent {
  constructor(private service: BaseService) {
    this.service.getCart().subscribe(data => {
      this.prods = data;
    });
  }

  prods!: Product[];

  del(prod: Product) {
    this.service.delFromCart(prod).subscribe(k => {
      this.service.getCart().subscribe(data => {
        this.prods = data;
      })
    });
  }

  getPrice() {
    let price = 0;
    this.prods.forEach(e => price+=e.real_price);
    return price;
  }

  getUnrealprice() {
    let price = 0;
    this.prods.forEach(e => price+=e.unreal_price);
    return price;
  }

  getDiscount() {
    return this.getUnrealprice() - this.getPrice();
  }
}
