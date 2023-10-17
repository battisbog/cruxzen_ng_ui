import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnChanges {

    @Input() data: any[] = [];

    ngOnChanges(): void {
        console.log("Data changed:", this.data);
    }
}
