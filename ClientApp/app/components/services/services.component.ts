import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { TabsModule } from "ng2-tabs";
import { Router } from '@angular/router';

@Component({
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})

export class ServicesComponent {
    path: string;
    isCorporateActive: boolean;
    isPersonalActive: boolean;

    constructor(private router: Router) {
        this.path = this.router.url;
        if (this.path === "/services/corporate" || this.path === "/services") {
            this.isCorporateActive = true;
            this.isPersonalActive = false;
        } else {
            this.isCorporateActive = false;
            this.isPersonalActive = true;
        }
    }
    pageTitle: string = 'Services';


}


