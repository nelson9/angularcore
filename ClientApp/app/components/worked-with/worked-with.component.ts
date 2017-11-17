import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
    templateUrl: './worked-with.component.html',
    selector: 'worked-with',
    styleUrls: [ './worked-with.component.scss']
})
export class WorkedWithcomponent implements OnInit {

    public pageTitle: string = 'Welcome';
    public carouselOne: NgxCarousel;

    public carouselTileItems: Array<Tile>;
    public carouselTile: NgxCarousel;

    ngOnInit() {
        this.carouselTileItems = new Array<Tile>();
       


        let tile1 = new Tile();
        tile1.url = "/dist/assets/images/BBC-logo.png";
        tile1.urlAlt = "/dist/assets/images/sabadell_logo.png";

        let tile2 = new Tile();
        tile2.url = "/dist/assets/images/sabadell_logo.png";

        let tile3 = new Tile();
        tile3.url = "/dist/assets/images/Betfair_logo.png";

        let tile4 = new Tile();
        tile4.url = "/dist/assets/images/reuter-logo.png";

        let tile5 = new Tile();
        tile5.url = "/dist/assets/images/Google_logo.png";

        let tile6 = new Tile();
        tile6.url = "/dist/assets/images/starlizard-logo.png" ;

        let tile7 = new Tile();
        tile7.url = "/dist/assets/images/EY-logo-li.png";

        let tile8 = new Tile();
        tile8.url = "/dist/assets/images/vodafone-logo.png";

        let tile9 = new Tile();
        tile9.url = "/dist/assets/images/orange-logo.png" ;

        this.carouselTileItems = [tile1, tile5, tile4, tile7, tile2, tile3, tile6, tile8, tile9];

        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true
            },
            load: 3,
            touch: true,
            easing: 'ease'
        }
    }

    mouseEnter(div: any) {
        div.hidden = true;
    }

    mouseLeave(div: any) {
        div.hidden = false;
    }
}

export class Tile {
    url: string;
    urlAlt: string;
    alt: string;
}
