import { Observable } from 'rxjs';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: `root`
})
export class BaseService {

  constructor(private http: HttpClient) { }

  private url: string = "/api/products";

  getHits(filter: string) {
    return this.http.post<Product[]>(this.url + `/hits`, filter).pipe();
  }

  getJackets(filter: string) {
    return this.http.post<Product[]>(this.url + `/jackets`, filter).pipe();
  }

  getPants(filter: string) {
    return this.http.post<Product[]>(this.url + `/pants`, filter).pipe();
  }

  getSuits(filter: string) {
    return this.http.post<Product[]>(this.url + `/suits`, filter).pipe();
  }

  getTshirts(filter: string) {
    return this.http.post<Product[]>(this.url + `/tshirts`, filter).pipe();
  }

  getSweatshirts(filter: string) {
    return this.http.post<Product[]>(this.url + `/sweatshirts`, filter).pipe();
  }

  getAccessories(filter: string) {
    return this.http.post<Product[]>(this.url + `/accessories`, filter).pipe();
  }

  getProduct(type: string, id: number) {
    return this.http.get<Product>(this.url + `/${type}/${id}`).pipe();
  }

  addToCart(prod: Product) {
    return this.http.post<Product>(this.url + `/add`, prod).pipe();
  }

  getCart() {
    return this.http.get<Product[]>(this.url + `/cart`).pipe();
  }

  delFromCart(prod: Product) {
    return this.http.post<Product>(this.url + `/delFromCart`, prod).pipe();
  }
}
