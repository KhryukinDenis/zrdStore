import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() onClickJackets = new EventEmitter();
  clickJackets() {
    this.onClickJackets.emit();
  }

  @Output() onClickPants = new EventEmitter();
  clickPants() {
    this.onClickPants.emit();
  }

  @Output() onClickSuits = new EventEmitter();
  clickSuits() {
    this.onClickSuits.emit();
  }

  @Output() onClickTshirts = new EventEmitter();
  clickTshirts() {
    this.onClickTshirts.emit();
  }

  @Output() onClickSweatshirts = new EventEmitter();
  clickSweatshirts() {
    this.onClickSweatshirts.emit();
  }

  @Output() onClickAccessories = new EventEmitter();
  clickAccessories() {
    this.onClickAccessories.emit();
  }
}
