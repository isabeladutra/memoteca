import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: 'modelo1'

  }

  criarPensamento() {
    alert("Novo pensamento criado!")
  }

  cancelarPensamento() {
    alert("Ação cancelada!")
  }

  constructor() {}
  ngOnInit(): void {
    
  }
}
