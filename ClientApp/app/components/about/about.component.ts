import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map'


@Component({
    templateUrl: './about.component.html'
})

export class AboutComponent {

    constructor() { }
    pageTitle: string = 'About';
    
}
