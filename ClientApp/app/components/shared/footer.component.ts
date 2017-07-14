import { Component } from '@angular/core';

@Component({
    selector: 'shared-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    name: string;

    constructor() {
        this.name = "Sam";
    }
}