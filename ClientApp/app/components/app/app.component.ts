import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
 
    constructor(private router: Router, private winRef: WindowRef) {
       
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
