import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { sharedConfig } from './app.module.shared';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/shared/header.component';
import { FooterComponent } from './components/shared/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ModalModule.forRoot(),
        BootstrapModalModule
    ],
    declarations: [
        AppComponent, HomeComponent, ContactComponent, FooterComponent, HeaderComponent
    ],
    exports: [
        RouterModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
