import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import { WindowRef } from '../../windowRef';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [WindowRef],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    private window: Window;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    constructor(private router: Router, private location: Location, private winRef: WindowRef) {
        this.winRef = winRef;
    }

    ngOnInit() {

        this.router.events.subscribe((evt) => {
            var window = this.winRef.nativeWindow;
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            if (window != undefined) {
                window.scrollTo(0, 0);
            }
        });
    }
}
