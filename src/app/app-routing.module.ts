import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPessoaComponent } from './paginas/lista-pessoa/lista-pessoa.component';
import { CriarPessoaComponent } from './paginas/criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './paginas/editar-pessoa/editar-pessoa.component';


const routes: Routes = [
  { path:'',component:ListaPessoaComponent},
  { path: 'pessoa/criar',component: CriarPessoaComponent },
  { path: 'pessoa/editar/:id',component: EditarPessoaComponent},
  { path: '**',redirectTo: ''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

