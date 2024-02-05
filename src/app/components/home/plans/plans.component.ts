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
      type: 'Plano Básico',
      normal: 250,
      valorTrimestral: 216,
      valorSemestral: 180,
      describe: `<ul>
      <li>Dieta individualizada</li>
      <li>Avaliação do físico para traçar objetivos</li>
      <li>Suplementação Personalizada</li>
      <li>Suporte 24 horas via WhatsApp</li>
      </ul>`,
    },
    {
      id: 1,
      selectedPlan: '1',
      type: 'Plano Plus',
      normal: 350,
      valorTrimestral: 316,
      valorSemestral: 280,
      describe: `<ul>
      <li>Dieta individualizada</li>
      <li>Avaliação do físico para traçar objetivos</li>
      <li>Suplementação Personalizada</li>
      <li>Treino individualizado e personalizado</li>
      <li>Suporte 24 horas via WhatsApp</li>
      </ul>`,
    },
    {
      id: 2,
      selectedPlan: '1',
      type: 'Plano Premium',
      normal: 450,
      valorTrimestral: 416,
      valorSemestral: 380,
      describe: `<ul>
      <li>Dieta individualizada</li>
      <li>Avaliação do físico para traçar objetivos</li>
      <li>Suplementação Personalizada</li>
      <li>Treino individualizado e personalizado</li>
      <li>Elaboração de protocolo de recursos ergogênicos </li>
      <li>Suporte 24 horas via WhatsApp</li>
      </ul>`,
    },
  ];

  onChangeSelectedPlan(event: MatRadioChange, planId: number) {
    this.plans[planId].selectedPlan = event.value;
  }

  getTotalPlan(plan: any){
    if(plan.selectedPlan == '2'){
      return plan.valorTrimestral * 3
    }
    if(plan.selectedPlan == '3'){
      return plan.valorSemestral * 6
    }
    return plan.normal
  }
}
