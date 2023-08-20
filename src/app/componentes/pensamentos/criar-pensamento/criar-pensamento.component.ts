import { Component, OnInit} from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{
  pensamento: Pensamento= {

    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: 'modelo1'

  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {this.router.navigate(['/listarPensamento'])})
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento'])
  }

  constructor(private service: PensamentoService,
    private router : Router) {}
  ngOnInit(): void {
    
  }
}
