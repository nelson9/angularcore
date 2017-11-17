import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition, keyframes} from '@angular/animations';


@
Component({
    selector: 'shared-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        trigger('headerState', [
            transition('inactive => active', [
                animate(500, keyframes([
                    style({ transform: 'translateY(-100%)' }),
                    style({ transform: 'translateY(0)' })
                ]))
            ])
        ])
    ]
})

export class HeaderComponent {
    name: string;
    after: boolean;
    altHeader: boolean;
    state : string;
    constructor(public el: ElementRef, private router: Router, ) {
        this.state = "inactive";
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
            this.state = "active";
        } else {
            this.state = "inactive";
            this.after = false;
        }

    }

    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}