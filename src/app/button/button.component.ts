import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    @Output() onClick = new EventEmitter();
    @Input() color: string = "btn-primary";
    @Input() message: string = "btn";
    @Input() size: string = "";

    constructor() { }

    ngOnInit(): void {
    }

    click() {
        this.onClick.emit();
    }
}
