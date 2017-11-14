import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@
Component({
    selector: 'shared-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    name: string;
    after: boolean;
    altHeader: boolean;

    constructor(public el: ElementRef, private router: Router) {
       
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {

            let path = this.router.url;
            if (path === "/contact" || path === "/level-test") {
                this.after = true;
                this.altHeader = true;
            } else {
                this.after = false;
                this.altHeader = false;
            } 
        });
    }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset;
        if (scrollPosition >= 700 || this.altHeader) {
            this.after = true;
        } else {
            this.after = false;
        }

    }
}