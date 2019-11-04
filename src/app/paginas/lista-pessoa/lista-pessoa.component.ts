import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa';
import { PessoaService } from '../../service/pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  public pessoas: Pessoa[];
  
  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.getListaPessoas();
  }

  getListaPessoas(){
    this.pessoaService.getListaPessoas()
      .subscribe((pessoas:Pessoa[]) => {
        this.pessoas = pessoas;
      });
  }

  deletaPessoa(id: number){
    this.pessoaService.deletaPessoa(id)
    .subscribe(() => {
      this.getListaPessoas() ;
    });
    
  }

  existemPessoa():boolean{
    return this.pessoas && this.pessoas.length > 0;
  }


}
