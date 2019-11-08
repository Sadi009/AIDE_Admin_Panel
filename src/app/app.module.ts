import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';


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
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    ShopService,
    ProductDetailsService,
    OrderDetailsService,
    DoctorListService,
    AppointmentService,
    AmbulanceService,
    HospitalService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
