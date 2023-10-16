import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

    @Output() loadData: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    loadChartData() {
        this.loadData.emit(true);
    }
}
