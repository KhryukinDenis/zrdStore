import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CartShopingComponent } from './components/cart-shoping/cart-shoping.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpecialMenuComponent } from './components/special-menu/special-menu.component';

const appRouters: Routes =[
  { path: '', component: HomepageComponent },
  { path: 'card-product', component: CardProductComponent },
  { path: 'cart-shoping', component: CartShopingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CardProductComponent,
    CartShopingComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SpecialMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
