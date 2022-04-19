import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vex-recomendacoes',
  templateUrl: './recomendacoes.component.html',
  styleUrls: ['./recomendacoes.component.scss']
})
export class RecomendacoesComponent implements OnInit {

  slides = [
    {
      imagem: 'assets/img/illustrations/image.jpg',
      comentario:'Detesto agendar consulta por telefone, foi a primeira vez que usei, achei de fácil navegação e intuitivo, agora posso agendar minhas consultas sem stress. Muito obrigado GoMed.',
      nome: 'Daniela Custódio',
      decricao: '(Paciente)'
    }, 
    {
      imagem: 'assets/img/illustrations/image2.jpg',
      comentario:'Ferramenta completa e confiável que acredito pela facilidade e otimização nos agendamentos, percebi um aumento no número de novos pacientes da clínica. Recomendo aos colegas de profissão.',
      nome: 'Thomas Benson',
      decricao: '(Médico)'
    }, 
    {
      imagem: 'assets/img/illustrations/image3.jpg',
      comentario:'Esqueça o livrinho do seu plano, escolha seu médico e horário sem telefonemas e musiquinhas de espera. Prático e completo.',
      nome: 'Bruno Cursino',
      decricao: '(Paciente)'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
