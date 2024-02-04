import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  selectedPlan = "1";

  plans = [
    {
      period: 'Consulta',
      months: null,
      normal: 999,
      valorTreino: 999,
      valorErgogenico: 999,
    },
    {
      period: 'Consultoria Mensal',
      months: 1,
      normal: 999,
      valorTreino: 999,
      valorErgogenico: 999,
    },
    {
      period: 'Consultoria Trimestral',
      months: 3,
      normal: 999,
      valorTreino: 999,
      valorErgogenico: 999,
    },
  ];

}
