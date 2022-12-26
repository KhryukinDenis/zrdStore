import { BaseService } from './../../services/base.service';
import { Product } from 'src/app/models/product';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {

  id!: number;
  type!: string;
  color!: string;
  prod!: Product;
  private subscription: Subscription;
  constructor(private route: ActivatedRoute, private service: BaseService) {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.type = params["type"];
      this.color = params["color"];
    });
  }

  ngOnInit() {
    this.service.getProduct(this.type, this.id).subscribe(prod => this.prod = prod);
  }

  ngAfterViewInit() {
    this.prod.current_color = this.color;
    this.prod.current_image = this.prod.images.at(this.prod.colors.indexOf(this.color)) as string;
  }

  addToCart(item: Product) {
    this.service.addToCart(item).subscribe(s => console.log(`${s.name} added to cart`));
  }
}
