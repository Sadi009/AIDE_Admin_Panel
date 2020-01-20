import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { SliderModule } from 'angular-image-slider';
import { NgImageSliderModule } from 'ng-image-slider';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ShopService } from './services/shopService/shop.service';
import { ProductDetaislComponent } from './shop/product-detaisl/product-detaisl.component';
import { ProductDetailsService } from './services/shopService/product-details.service';
import { OrderDetailsComponent } from './shop/order-details/order-details.component';
import { OrderDetailsService } from './services/shopService/order-details.service';
import { CatagoryComponent } from './shop/catagory/catagory.component';
import { CreateOrderComponent } from './shop/create-order/create-order.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorListService } from './services/doctorService/doctor-list.service';
import { AppointmentListComponent } from './doctor/appointment-list/appointment-list.component';
import { AppointmentService } from './services/doctorService/appointment.service';
import { LiveAppointmentComponent } from './doctor/live-appointment/live-appointment.component';
import { AmbulanceService } from './services/ambulanceService/ambulance.service';
import { FilterPipe } from './filter.pipe';
import { HospitalService } from './services/hospitalService/hospital.service';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/userService/user.service';
import { MyProductComponent } from './my-product/my-product.component';
import { CatagoryService } from './services/shopService/catagory.service';
import { MyProductService } from './services/myProductService/myProductService';
import { CreateOrderService } from './services/shopService/create-order.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    DoctorComponent,
    AmbulanceComponent,
    HospitalComponent,
    ProductDetaislComponent,
    OrderDetailsComponent,
    CatagoryComponent,
    CreateOrderComponent,
    DoctorListComponent,
    AppointmentListComponent,
    LiveAppointmentComponent,
    FilterPipe,
    UsersComponent,
    MyProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    SliderModule,
    NgImageSliderModule
  ],
  providers: [
    ShopService,
    ProductDetailsService,
    OrderDetailsService,
    DoctorListService,
    AppointmentService,
    AmbulanceService,
    HospitalService,
    UserService,
    CatagoryService,
    MyProductService,
    CreateOrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
