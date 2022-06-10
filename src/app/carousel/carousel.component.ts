import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

    @Input() images: string[] = [];

    private index = 0;
    public url = "";

    constructor() { }

    ngOnInit(): void {
    }

    back() {
        if (this.index == 0) {
            this.index = this.images.length;
        }
        this.index--;
        this.url = this.images[this.index];
    }

    next() {
        if (this.index == this.images.length - 1) {
            this.index = -1;
        }
        this.index++;
        this.url = this.images[this.index];
    }
}
