import { Component } from '@angular/core';

import 'rxjs/add/operator/map'


@Component({
    templateUrl: './about.component.html'
})

export class AboutComponent {

    constructor() { }
    pageTitle: string = 'About';
    
}
