import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'shared-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
    name: string;
    testMode: boolean;
    constructor(private router: Router) {

    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {

            let path = this.router.url;
            if (path === "/level-test") {
                this.testMode = true;
                
            } else {
                this.testMode = false;
            }
        });
    }
}