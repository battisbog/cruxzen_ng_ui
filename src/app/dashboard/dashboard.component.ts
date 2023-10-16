import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    graphData: any[] = [];
    pieChartData: any[] = [];

    constructor() { }

    onLoadData(event: boolean) {
        if (event) {
            this.graphData = [
                { month: 'January', val: 15 },
                { month: 'February', val: 20 },
                { month: 'March', val: 25 },
                // ... other data
            ];

            this.pieChartData = [
                { region: 'North', sales: 15 },
                { region: 'South', sales: 25 },
                { region: 'East', sales: 10 },
                { region: 'West', sales: 50 },
                // ... other data
            ];
        }
    }
}
