import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  mensagensPassoAPasso = [
    "( 1 ) 1° passo, escolha um plano que lhe for mais conveniente.",
    "( 2 ) 2° passo, preencha a ficha de anamnese detalhadamente.",
    "( 3 ) 3° passo, avaliação do seu caso e elaboração do plano com entrega em até 2 dias.",
    "( 4 ) 4° passo, envio do protocolo personalizado.",
    "( 5 ) 5° passo, envio de fotos para avaliação.",
  ];

  mensagensComoFunciona = [
    "Muitas pessoas acabam se frustrando, justamente por acreditarem em diversos mitos, o que acaba por limitar seus resultados. Sendo assim, estratégias nutricionais baseadas em ciência são fundamentais para que se alcance resultados acima da média.",
    "O que mais podemos ver, em academias, são pessoas que treinam a meses ou até mesmo anos com evoluções muito discretas. Isso acontece por falta de um bom planejamento dietético e de treinamento.",
    "A maioria das pessoas estão presas em dietas e treinos mirabolantes que acabam sendo insustentáveis a longo prazo, assim dificultando não só bons resultados, mas a manutenção a longo prazo.",
    "Porém, você irá aprender aqui comigo, como de fato é possível atingir resultados extraordinários sem precisar sofrer com dieta, passar fome, deixar de comer o que gosta ou mesmo sofrer com terrorismos nutricionais, além de um treinamento realmente individualizado e que em sinergia com a dieta será extremamente eficiente para gerar resultados surpreendentes.",
  ];

  mensagensParaQuem = [
    `O acompanhamento é bastante flexível, atendendo dês de:  
    <br> > atletas (Alta performance no fisiculturismo, futebol, ciclismo, maratonas e demais...)  
    <br> > pessoas comuns (ganho de massa muscular/ emagrecimento / mudança de composição corporal)  
    <br> > pessoas com patologias. (como diabetes obesidade, hipertensão, colesterol alto, doenças intestinais inflamatórias, etc...)`,
  ];


  elasticEffect(element: HTMLElement) {
    element.classList.add('clicked-elastic');
    setTimeout(() => {
      element.classList.remove('clicked-elastic');
    }, 1000);
  }
}
