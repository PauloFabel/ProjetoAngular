import { Component } from '@angular/core';
import { PessoaService } from '../../service/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../interfaces/pessoa';


@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent  {

  public pessoa: Pessoa;

  constructor(private pessoaService : PessoaService,
        private activatedRoute: ActivatedRoute,
    private router : Router) {

      this.getPessoa(this.activatedRoute.snapshot.params.id);

  }

  getPessoa(id: number){
    this.pessoaService.getPessoa(id)
      .subscribe((pessoa: Pessoa)=> {
        this.pessoa = pessoa;});

  }

  atualizaPessoa(pessoa: Pessoa){
    this.pessoaService.atualizaPessoa(pessoa)
      .subscribe(
        ()=> { this.router.navigateByUrl('/');}
    );
  }
  

}
