import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/public/home/home.component';
import { ListTripsComponent } from './components/public/list-trips/list-trips.component';
import { ListCapricesComponent } from './components/public/list-caprices/list-caprices.component';
import { FilterTripsComponent } from './components/public/filter-trips/filter-trips.component';
import { FilterCapricesComponent } from './components/public/filter-caprices/filter-caprices.component';
import { NavComponent } from './components/public/nav/nav.component';
import { DetailTripComponent } from './components/public/detail-trip/detail-trip.component';
import { DetailCapriceComponent } from './components/public/detail-caprice/detail-caprice.component';
import { TypeComponent } from './components/publish/type/type.component';
import { FormTripComponent } from './components/publish/form-trip/form-trip.component'; 
import { FormCapriceComponent } from './components/publish/form-caprice/form-caprice.component';
import { ConfirmTripComponent } from './components/publish/confirm-trip/confirm-trip.component';
import { ConfirmCapriceComponent } from './components/publish/confirm-caprice/confirm-caprice.component';
import { PublishedTripComponent } from './components/publish/published-trip/published-trip.component';
import { PublishedCapriceComponent } from './components/publish/published-caprice/published-caprice.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ExitRegisterComponent } from './components/user/exit-register/exit-register.component';
import { ConfirmatedRegisterComponent } from './components/user/confirmated-register/confirmated-register.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { MailDetailComponent } from './components/comunication/mail-detail/mail-detail.component';
import { NotificationsComponent } from './components/comunication/notifications/notifications.component';
import { Error404Component } from './components/public/error404/error404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountriesComponent } from './components/public/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { NavPerfilComponent } from './components/user/nav-perfil/nav-perfil.component';
import { NavPublishComponent } from './components/publish/nav-publish/nav-publish.component';
import { MailSendComponent } from './components/comunication/mail-send/mail-send.component';
import { MailReviveComponent } from './components/comunication/mail-revive/mail-revive.component';
import { NavMailComponent } from './components/comunication/nav-mail/nav-mail.component';
import { InboxDetailComponent } from './components/comunication/inbox-detail/inbox-detail.component';
import { SendDetailComponent } from './components/comunication/send-detail/send-detail.component';
import { ConditionsComponent } from './components/public/conditions/conditions.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListTripsComponent,
    ListCapricesComponent,
    FilterTripsComponent,
    FilterCapricesComponent,
    NavComponent,
    DetailTripComponent,
    DetailCapriceComponent,
    TypeComponent,
    FormTripComponent,
    FormCapriceComponent,
    ConfirmTripComponent,
    ConfirmCapriceComponent,
    PublishedTripComponent,
    PublishedCapriceComponent,
    RegisterComponent,
    ExitRegisterComponent,
    ConfirmatedRegisterComponent,
    LoginComponent,
    ProfileComponent,
    MailDetailComponent,
    NotificationsComponent,
    Error404Component,
    CountriesComponent,
    NavPerfilComponent,
    NavPublishComponent,
    MailSendComponent,
    MailReviveComponent,
    NavMailComponent,
    InboxDetailComponent,
    SendDetailComponent,
    ConditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
