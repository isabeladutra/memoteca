import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit{
  listaPensamentos = [
    {
      conteudo: 'Passo informacoes para o componente filho',
      autoria: 'componente pai',
      modelo: 'modelo3'
  
    },{
      conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Cevadis im ampola pa arma uma pindureta. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Per aumento de cachacis, eu reclamis. Diuretics paradis num copo é motivis de denguis. In elementis mé pra quem é amistosis quis leo.',
      autoria: 'componente filho',
      modelo: 'modelo2'
  
    }];

  constructor() {}

  ngOnInit(): void {
  }
}
