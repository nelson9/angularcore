import { Component, AfterViewInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@
Component({
    templateUrl: './home.component.html',
    animations: [
        trigger('logoState', [
            state('inactive', style({
                opacity: 0
            })),
            state('active', style({
                opacity: 1
            })),
            transition('inactive => active', animate('1000ms ease-in'))
        ])
    ]
})
export class HomeComponent implements AfterViewInit {
   
    state: string;

    constructor() {
        this.state = "inactive";
    }

    ngAfterViewInit() {
        this.state = "active";
    }
}
