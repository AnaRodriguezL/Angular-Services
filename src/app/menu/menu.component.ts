import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../services/imagenes.service';
import { Category } from './category';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    category: Category[] = [];
    index: number = 0;

    constructor(private imagenesService: ImagenesService) { }

    ngOnInit(): void {
        this.category = this.imagenesService.categories;
    }

    click(index: number) {
        this.index = index;
    }
}
