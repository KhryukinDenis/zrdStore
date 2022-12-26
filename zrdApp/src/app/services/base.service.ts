import { Observable } from 'rxjs';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  private url: string = "/api/products";

  getHits() {
    return this.http.get<Product[]>(this.url + '/hits').pipe();
  }

  getJackets() {
    return this.http.get<Product[]>(this.url + '/jackets').pipe();
  }

  getPants() {
    return this.http.get<Product[]>(this.url + '/pants').pipe();
  }

  getSuits() {
    return this.http.get<Product[]>(this.url + '/suits').pipe();
  }

  getTshirts() {
    return this.http.get<Product[]>(this.url + '/tshirts').pipe();
  }

  getSweatshirts() {
    return this.http.get<Product[]>(this.url + '/sweatshirts').pipe();
  }

  getAccessories() {
    return this.http.get<Product[]>(this.url + '/accessories').pipe();
  }


  getProduct(type: string, id: number) {
    return this.http.get<Product>(this.url + `/${type}/${id}`).pipe();
  }

  addToCart(prod: Product){
    return this.http.post<Product>(this.url + '/add', prod).pipe();
  }

  getCart() {
    return this.http.get<Product[]>(this.url + '/cart').pipe();
  }

  delFromCart(prod: Product) {
    return this.http.post<Product>(this.url + '/delFromCart', prod).pipe();
  }
}
