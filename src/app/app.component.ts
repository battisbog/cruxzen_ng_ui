import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chartData: any[] = [
    { month: 'January', val: 15 },
    { month: 'February', val: 20 },
    { month: 'March', val: 25 },
    // ... other data
  ];
  pieChartData: any[] = [
    { region: 'North', sales: 15 },
    { region: 'South', sales: 25 },
    { region: 'East', sales: 10 },
    { region: 'West', sales: 50 },
    // ... other data
  ];

  isChartVisible = false;
  isPieChartVisible = false;

  showCharts() {
    this.isChartVisible = true;
    this.isPieChartVisible = true;
  }
}
