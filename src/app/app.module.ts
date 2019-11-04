import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './paginas/lista-pessoa/lista-pessoa.component';
import { FormPessoaComponent } from './compartilhado/form-pessoa/form-pessoa.component';
import { CriarPessoaComponent } from './paginas/criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './paginas/editar-pessoa/editar-pessoa.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent,
    FormPessoaComponent,
    CriarPessoaComponent,
    EditarPessoaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
