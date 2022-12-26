import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CartShopingComponent } from './components/cart-shoping/cart-shoping.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'card-product/:type/:id/:color', component: CardProductComponent },
  { path: 'cart-shoping', component: CartShopingComponent }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
