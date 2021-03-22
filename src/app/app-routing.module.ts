import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { MailReviveComponent } from './components/comunication/mail-revive/mail-revive.component';
import { MailSendComponent } from './components/comunication/mail-send/mail-send.component';
import { DetailTripComponent } from './components/public/detail-trip/detail-trip.component';
import { DetailCapriceComponent } from './components/public/detail-caprice/detail-caprice.component';
import { Error404Component } from './components/public/error404/error404.component';
import { FilterCapricesComponent } from './components/public/filter-caprices/filter-caprices.component';
import { FilterTripsComponent } from './components/public/filter-trips/filter-trips.component';
import { HomeComponent } from './components/public/home/home.component';
import { ListCapricesComponent } from './components/public/list-caprices/list-caprices.component';
import { ListTripsComponent } from './components/public/list-trips/list-trips.component';
import { FormCapriceComponent } from './components/publish/form-caprice/form-caprice.component';
import { FormTripComponent } from './components/publish/form-trip/form-trip.component';
import { TypeComponent } from './components/publish/type/type.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { tokenGuard } from './token.guard';
import { InboxDetailComponent } from './components/comunication/inbox-detail/inbox-detail.component';
import { SendDetailComponent } from './components/comunication/send-detail/send-detail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [tokenGuard] },
  { path: 'type', component: TypeComponent },
  { path: 'listCaprice', component: FilterCapricesComponent },
  { path: 'listTrip', component: FilterTripsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'formTrip', component: FormTripComponent, canActivate: [tokenGuard] },
  { path: 'formCaprice', component: FormCapriceComponent, canActivate: [tokenGuard] },
  { path: 'mailRecive', component: MailReviveComponent, canActivate: [tokenGuard] },
  { path: 'mailSend', component: MailSendComponent, canActivate: [tokenGuard] },
  { path: 'trips/detail/:id', component: DetailTripComponent },
  { path: 'caprices/detail/:id', component: DetailCapriceComponent },
  { path: 'mailing/inbox/detail/:id', component: InboxDetailComponent },
  { path: 'mailing/send/detail/:id', component: SendDetailComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
