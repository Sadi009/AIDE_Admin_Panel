import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ShopComponent } from './shop/shop.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ProductDetaislComponent } from './shop/product-detaisl/product-detaisl.component';
import { OrderDetailsComponent } from './shop/order-details/order-details.component';
import { CatagoryComponent } from './shop/catagory/catagory.component';
import { CreateOrderComponent } from './shop/create-order/create-order.component';
import { UsersComponent } from './users/users.component';
import { MyProductComponent } from './my-product/my-product.component';
import { DiagonosticCenterComponent } from './diagonostic-center/diagonostic-center.component';
import { DiagonosticCenterDetailsComponent } from './diagonostic-center/diagonostic-center-details/diagonostic-center-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent, children: [
    { path: '', redirectTo: 'shop-details', pathMatch: 'full' },
    { path: 'shop-details', component: ProductDetaislComponent },
    { path: 'order-details', component: OrderDetailsComponent },
    { path: 'catagory', component: CatagoryComponent },
    { path: 'create-product', component: CreateOrderComponent }
  ] },
  { path: 'my-products/:id', component: MyProductComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'diagonostic-center', component: DiagonosticCenterComponent },
  { path: 'diagonostic-center-details', component: DiagonosticCenterDetailsComponent },
  { path: 'ambulance', component: AmbulanceComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
