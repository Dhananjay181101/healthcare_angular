import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './signin/signin.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { DataComponent } from './data/data.component';
import { DilComponent } from './dil/dil.component';
//import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { PaymentComponent } from './payment/payment.component';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';
import { BabyComponent } from './baby/baby.component';
import { D1Component } from './d1/d1.component';
import { D3Component } from './d3/d3.component';
import { D2Component } from './d2/d2.component';
import { BloodComponent } from './blood/blood.component';
import { Blood1Component } from './blood1/blood1.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
{path:'contact',component:ContactComponent},

{path:'register',component:RegisterComponent},

{path:'about',component:AboutComponent},
{path:'payment',component:PaymentComponent},
{path:'paysuccess', component:PaysuccessComponent},



{ path: 'home', redirectTo: 'default', pathMatch: 'full' },

{path:'signin', component:SignInComponent},

{path: 'home', component:HomeComponent},

{path:'bloodbank', component:BloodbankComponent},

{path:'data', component:DataComponent},

{path:'dil', component:DilComponent},

 {path:'bookappointment', component:BookappointmentComponent},

 {path:'logout', component:LogoutComponent},
 {path:'ghar',component:AppComponent},
 {path:'baby',component:BabyComponent},
 {path:'d1',component:D1Component},
 {path:'d2',component:D2Component},
 {path:'d3',component:D3Component},
 {path:'blood',component:BloodComponent},
{path:'blood1',component:Blood1Component}
// {path:'BookAppointment', component:BookAppointmentComponent}
];
