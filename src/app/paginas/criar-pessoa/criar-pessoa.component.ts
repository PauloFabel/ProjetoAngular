import { Component,  } from '@angular/core';
import { PessoaService } from '../../service/pessoa.service';
import { Router } from '@angular/router';
import { Pessoa } from '../../interfaces/pessoa';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent  {

  constructor(private pessoaService : PessoaService, private router: Router) {

  }

  addPessoa(pessoa: Pessoa){
     this.pessoaService.addPessoa(pessoa)
       .subscribe(
         () => {this.router.navigateByUrl('/');}
         
         );
  }

}


