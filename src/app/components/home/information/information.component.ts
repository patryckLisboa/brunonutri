import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  mensagensPassoAPasso = [
    ` <p><b> 1° Passo </b><p> Escolha um plano que lhe for mais conveniente.`,
    ` <p><b> 2° Passo </b><p> Preencha a ficha de anamnese detalhadamente.`,
    ` <p><b> 3° Passo </b><p> Avaliação do seu caso e elaboração do plano com entrega em até 2 dias.`,
    ` <p><b> 4° Passo </b><p> Envio do protocolo personalizado.`,
    ` <p><b> 5° Passo </b><p> Envio de fotos para avaliação.`,
  ];

  mensagensComoFunciona = [
    "Muitas pessoas acabam se frustrando, justamente por acreditarem em diversos mitos, o que acaba por limitar seus resultados. Sendo assim, estratégias nutricionais baseadas em ciência são fundamentais para que se alcance resultados acima da média.",
    "O que mais podemos ver, em academias, são pessoas que treinam a meses ou até mesmo anos com evoluções muito discretas. Isso acontece por falta de um bom planejamento dietético e de treinamento.",
    "A maioria das pessoas estão presas em dietas e treinos mirabolantes que acabam sendo insustentáveis a longo prazo, assim dificultando não só bons resultados, mas a manutenção a longo prazo.",
    "Porém, você irá aprender aqui comigo, como de fato é possível atingir resultados extraordinários sem precisar sofrer com dieta, passar fome, deixar de comer o que gosta ou mesmo sofrer com terrorismos nutricionais, além de um treinamento realmente individualizado e que em sinergia com a dieta será extremamente eficiente para gerar resultados surpreendentes.",
  ];

  mensagensParaQuem = [
    { text: `<p><b>Atletas</b></p> Alta performance no fisiculturismo, futebol, ciclismo, maratonas e demais...`, icon: "fitness_center" },
    { text: `<p><b>Pessoas comuns</b></p> Ganho de massa muscular, emagrecimento, mudança de composição corporal, dentre outros...`, icon: "weekend" },
    { text: `<p><b>Pessoas com patologias</b></p> Como diabetes, obesidade, hipertensão, colesterol alto, doenças intestinais inflamatórias, etc...`, icon: "local_hospital" }
  ];
  

  //  [
  //   `O acompanhamento é bastante flexível, atendendo dês de:  
  //   <br> > atletas (Alta performance no fisiculturismo, futebol, ciclismo, maratonas e demais...)  
  //   <br> > pessoas comuns (ganho de massa muscular/ emagrecimento / mudança de composição corporal)  
  //   <br> > pessoas com patologias. (como diabetes obesidade, hipertensão, colesterol alto, doenças intestinais inflamatórias, etc...)`,
  // ]; // fitness_center directions_bike local_hospital local_dining fastfood weekend


  elasticEffect(element: HTMLElement) {
    element.classList.add('clicked-elastic');
    setTimeout(() => {
      element.classList.remove('clicked-elastic');
    }, 1000);
  }

  getNeonIcon(texto = ""){
    return `filter_${texto.match(/\d+/)}`
  }
}
