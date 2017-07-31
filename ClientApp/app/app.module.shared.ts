import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/shared/header.component';
import { FooterComponent } from './components/shared/footer.component';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { FormsModule } from '@angular/forms';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        ContactComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'contact', component: ContactComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ]),
        ModalModule.forRoot(),
        BootstrapModalModule,
        FormsModule
    ]
};
