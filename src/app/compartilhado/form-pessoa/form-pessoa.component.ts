import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.css']
})
export class FormPessoaComponent{

  @Input() pessoa: Pessoa = <Pessoa>{};
  @Output() outputPessoa: EventEmitter<Pessoa> = new EventEmitter(); 

  onSubmit(){
    this.outputPessoa.emit(this.pessoa);
  }
  
}
