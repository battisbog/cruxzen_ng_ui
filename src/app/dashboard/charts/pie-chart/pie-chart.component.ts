import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
    
    @Input() data: any[] = [];
    
    constructor() { }

    ngOnInit(): void {
    }

}
