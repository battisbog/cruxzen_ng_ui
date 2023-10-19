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
            { month: "January", value: 10 },
            { month: "February", value: 20 },
            { month: "March", value: 30 },
            { month: "April", value: 40 }
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
