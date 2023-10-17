import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  graphData: any[] = [];
  pieChartData: any[] = [];
  isGraphVisible = true;
  isPieChartVisible = true;
  

    constructor() { }

    onLoadData(event: boolean) {
        if (event) {
          this.graphData = [
            { name: 'Jan', value: 120 },
            { name: 'Feb', value: 150 },
            { name: 'Mar', value: 80 },
            { name: 'Apr', value: 90 },
            { name: 'May', value: 60 }
          ];
      

            this.pieChartData = [
                { region: 'North', sales: 15 },
                { region: 'South', sales: 25 },
                { region: 'East', sales: 10 },
                { region: 'West', sales: 50 },
            ];
        }
    }

    onClearData(event: boolean) {
      if (event) {
        this.graphData = [];
        this.pieChartData = [];
      }
  }
  
  onToggleGraphVisibility(event: boolean) {
      if (event) {
        this.isGraphVisible = !this.isGraphVisible;
      }
  }
  
  onTogglePieChartVisibility(event: boolean) {
      if (event) {
        this.isPieChartVisible = !this.isPieChartVisible;
      }
  }
  
}
