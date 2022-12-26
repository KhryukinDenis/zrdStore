import { BaseService } from './../../services/base.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private service: BaseService) { }

  prods: Product[] = [];

  ngOnInit() {
    this.service.getHits().subscribe(data => this.prods = data);
  }

  ClickHits() {
    this.service.getHits().subscribe(data => this.prods = data);
  }

  ClickJackets() {
    this.service.getJackets().subscribe(data => this.prods = data);
  }

  ClickPants() {
    this.service.getPants().subscribe(data => this.prods = data);
  }

  ClickSuits() {
    this.service.getSuits().subscribe(data => this.prods = data);
  }

  ClickTshirts() {
    this.service.getTshirts().subscribe(data => this.prods = data);
  }

  ClickSweatshirts() {
    this.service.getSweatshirts().subscribe(data => this.prods = data);
  }

  ClickAccessories() {
    this.service.getAccessories().subscribe(data => this.prods = data);
  }

  change_color(event: any, prod: Product) {
    var size = document.getElementById("color_box")!.children.length;
    for (let i = 0; i < size; i++)
      document.getElementById("color_box")!.children[i].className = document.getElementById("color_box")!.children[i].className.replace("color-btn-act", " ");
    prod.current_color = (event.path[0].className as string).split(' ')[1];
    prod.current_image = prod.images.at(prod.colors.indexOf(prod.current_color)) as string;
    event.srcElement.className += " color-btn-act";
  }

  addToCart(item: Product) {
    this.service.addToCart(item).subscribe(s => console.log(`${s.name} added to cart`));
  }

  delFromCart(item: Product) {
    this.service.delFromCart(item).subscribe(s => console.log(`${s.name} deleted to cart`));
  }

}
