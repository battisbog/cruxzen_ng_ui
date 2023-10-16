import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  @Output() loadDataEvent = new EventEmitter<boolean>();
  @Output() clearDataEvent = new EventEmitter<boolean>();
  @Output() toggleGraphVisibilityEvent = new EventEmitter<boolean>();
  @Output() togglePieChartVisibilityEvent = new EventEmitter<boolean>();

  constructor() { }

  loadData() {
    this.loadDataEvent.emit(true);
  }

  clearData() {
    this.clearDataEvent.emit(true);
  }

  toggleGraphVisibility() {
    this.toggleGraphVisibilityEvent.emit(true);
  }

  togglePieChartVisibility() {
    this.togglePieChartVisibilityEvent.emit(true);
  }

  // Add more methods as required
}
