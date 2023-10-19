import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import your components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlsComponent } from './dashboard/controls/controls.component';
import { GraphComponent } from './dashboard/charts//graph/graph.component';
import { PieChartComponent } from './dashboard/charts/pie-chart/pie-chart.component';

import { DxChartModule } from 'devextreme-angular';
import { DxPieChartModule } from 'devextreme-angular';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ControlsComponent,
    GraphComponent,
    PieChartComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxChartModule,
    DxPieChartModule
    
    // ... other module imports
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
