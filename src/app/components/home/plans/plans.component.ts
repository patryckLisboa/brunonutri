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
      payment: '1',
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
      payment: '1',
      type: 'Plano Plus',
      normal: 350,
      valorTrimestral: 316,
      valorSemestral: 280,
      describe: `<ul>
      <li>Dieta individualizada</li>
      <li>Avaliação do físico para traçar objetivos</li>
      <li>Suplementação Personalizada</li>
      <li>Suporte 24 horas via WhatsApp</li>
      <li>Treino individualizado e personalizado</li>
      </ul>`,
    },
    {
      id: 2,
      selectedPlan: '1',
      payment: '1',
      type: 'Plano Premium',
      normal: 450,
      valorTrimestral: 416,
      valorSemestral: 380,
      describe: `<ul>
      <li>Dieta individualizada</li>
      <li>Avaliação do físico para traçar objetivos</li>
      <li>Suplementação Personalizada</li>
      <li>Suporte 24 horas via WhatsApp</li>
      <li>Treino individualizado e personalizado</li>
      <li>Elaboração de protocolo de recursos ergogênicos </li>
      </ul>`,
    },
    {
      id: 3,
      selectedPlan: null,
      payment: '1',
      type: 'Consulta Presencial',
      normal: 300,
      valorTrimestral: 0,
      valorSemestral: 0,
      describe: `<ul>
      <li>Dieta individualizada</li>
      <li>Avaliação do físico para traçar objetivos</li>
      <li>Suplementação Personalizada</li>
      <li>Suporte 24 horas via WhatsApp válido por 30 dias após a consulta</li>
      <li>Consulta única (Sem Retorno Presencial)</li>
      </ul>`,
    },
  ];

  onChangeSelectedPlan(event: MatRadioChange, planId: number) {
    this.plans[planId].selectedPlan = event.value;
  }

  onChangeSelectedPayment(event: MatRadioChange, planId: number) {
    this.plans[planId].payment = event.value;
  }

  getTotalPlan(plan: any) {
    if (plan.selectedPlan == '2') {
      return plan.valorTrimestral * 3;
    }
    if (plan.selectedPlan == '3') {
      return plan.valorSemestral * 6;
    }
    return plan.normal;
  }

  openWhatsApp(openWhatsApp: HTMLElement, plan: any) {
    this.elasticEffect(openWhatsApp);

    let planoContratado = '';
    switch (plan.selectedPlan) {
      case '1':
        planoContratado = `mensal no valor de R$${plan.normal},00`;
        break;
      case '2':
        planoContratado = `trimestral no valor de R$${
          plan.valorTrimestral
        },00/Mês (Total R$${plan.valorTrimestral * 3},00)`;
        break;
      case '3':
        planoContratado = `semestral no valor de R$${
          plan.valorSemestral
        },00/Mês (Total R$${plan.valorSemestral * 6},00)`;
        break;
      default:
        planoContratado = `no valor de R$${plan.normal},00`;
    }
    const textForGender = plan.id == 3 ? 'a sua ' : 'o seu '
    const mensagem = `Olá Bruno, gostaria de contratar ${textForGender}${
      plan.type
    } ${planoContratado}. Pagamento no ${
      plan.payment == 1 ? 'PIX' : 'Cartão + taxa do cartão'
    }.`;
    const whatsAppUrl = `https://api.whatsapp.com/send?phone=5562984042418&text=${encodeURIComponent(
      mensagem
    )}`;

    setTimeout(() => {
      window.open(whatsAppUrl, '_blank');
    }, 500);
  }

  elasticEffect(element: HTMLElement) {
    element.classList.add('clicked-elastic');
    setTimeout(() => {
      element.classList.remove('clicked-elastic');
    }, 1000);
  }
}
