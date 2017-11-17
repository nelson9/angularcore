import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact/contact-form.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/shared/header.component';
import { FooterComponent } from './components/shared/footer.component';
import { LevelTestComponent } from './components/level-test/level-test.component';
import { WorkedWithcomponent } from "./components/worked-with/worked-with.component";

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { FormsModule } from '@angular/forms';
import { TabsModule } from "ng2-tabs";
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';



export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        FooterComponent,
        HeaderComponent,
        ServicesComponent,
        AboutComponent,
        LevelTestComponent,
        ContactFormComponent,
        WorkedWithcomponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'services/corporate', component: ServicesComponent },
            { path: 'services/private', component: ServicesComponent },
            { path: 'about', component: AboutComponent },
            { path: 'level-test', component: LevelTestComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ]),
        ModalModule.forRoot(),
        BootstrapModalModule,
        FormsModule,
        TabsModule,
        NgxCarouselModule,
        BrowserAnimationsModule
  ]
};
