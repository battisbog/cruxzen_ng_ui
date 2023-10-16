import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import your components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlsComponent } from './dashboard/controls/controls.component';
import { GraphComponent } from './dashboard/charts//graph/graph.component';
import { PieChartComponent } from './dashboard/charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ControlsComponent,
    GraphComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    // ... other module imports
  ],
  providers: [],
  bootstrap: [DashboardComponent] // set DashboardComponent as the root component
})
export class AppModule { }
