import { Component } from '@angular/core';
import { MatRadioChange, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  startPlan = '1';
  plans = [
    {
      id: 0,
      selectedPlan: '1',
      period: 'Consulta',
      months: null,
      normal: 250,
      valorTreino: 350,
      valorErgogenico: 450,
      describe: `Consulta presencial ou a domicílio, com <span>avaliação</span> física e análise geral`,
    },
    {
      id: 1,
      selectedPlan: '1',
      period: 'Consultoria Mensal',
      months: 1,
      normal: 200,
      valorTreino: 300,
      valorErgogenico: 400,
      describe: `Plano de consultoria mensal com acompanhamento <span>individualizado</span> e personalizado via WhatsApp 24h/dia, de segunda a sábado. Incluindo resposta a <span>dúvidas</span> e análise física periódica, presencial ou através de fotos.`,
    },
    {
      id: 2,
      selectedPlan: '1',
      period: 'Consultoria Trimestral',
      months: 3,
      normal: 150,
      valorTreino: 240,
      valorErgogenico: 330,
      describe: `Plano de consultoria trimestral com acompanhamento <span>individualizado</span> e personalizado via WhatsApp 24h/dia, de segunda a sábado. Incluindo resposta a <span>dúvidas</span> e análise física periódica, presencial ou através de fotos.`,
    },
  ];

  onChangeSelectedPlan(event: MatRadioChange, planId: number) {
    this.plans[planId].selectedPlan = event.value;
  }
}
