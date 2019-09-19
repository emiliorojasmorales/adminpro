import { Component, OnInit, Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  // @Input('ChartLabels') public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // @Input('ChartData') public doughnutChartData: number[] = [350, 450, 100];
  // @Input('ChartType') public doughnutChartType: string = 'doughnut';
  @Input('ChartLabels') public doughnutChartLabels: string[] = [];
  @Input('ChartData') public doughnutChartData: number[] = [];
  @Input('ChartType') public doughnutChartType: string = '';
  @Input('Leyenda') leyenda: string='';

  constructor() { }

  ngOnInit() {
  }

}
