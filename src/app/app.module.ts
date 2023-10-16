import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';

import { DxChartModule } from 'devextreme-angular';
import { DxPieChartModule} from 'devextreme-angular';
import { DxoLabelModule } from 'devextreme-angular/ui/nested';


@NgModule({
  declarations: [
    AppComponent,
    XyzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxChartModule,
    DxPieChartModule,
    DxoLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
