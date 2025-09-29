import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Contato } from './contato/contato';
import { Galeria } from './galeria/galeria';
import { DetalheImagem } from './detalhe-imagem/detalhe-imagem';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Produtos } from './produtos/produtos';
import { DetalheProduto } from './detalhe-produto/detalhe-produto';
import { Noticias } from './noticias/noticias';
import { DetalheNoticia } from './detalhe-noticia/detalhe-noticia';
import { Dashboard as AdminDashboard } from './admin/dashboard/dashboard';
import { Usuarios } from './admin/usuarios/usuarios';
import { DetalheUsuario } from './admin/detalhe-usuario/detalhe-usuario';
import { Relatorios } from './admin/relatorios/relatorios';
import { Vendas } from './admin/vendas/vendas';
import { Estoque } from './admin/estoque/estoque';
import { Cursos } from './cursos/cursos';
import { DetalheCurso } from './detalhe-curso/detalhe-curso';
import { Professores } from './professores/professores';
import { DetalheProfessor } from './detalhe-professor/detalhe-professor';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'contato', component: Contato },
  { path: 'galeria', component: Galeria },
  { path: 'detalhe', component: DetalheImagem },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'produtos', component: Produtos },
  { path: 'detalhe-produto', component: DetalheProduto },
  { path: 'noticias', component: Noticias },
  { path: 'detalhe-noticia', component: DetalheNoticia },
  { path: 'detelhe-produto', component: DetalheProduto },
  {
    path: 'admin',
    component: AdminDashboard,
    children: [
      { path: 'usuarios', component: Usuarios },
      { path: 'usuarios/detalhe', component: DetalheUsuario },
      {
        path: 'relatorios',
        component: Relatorios,
        children: [
          { path: 'vendas', component: Vendas },
          { path: 'estoque', component: Estoque },
        ],
      },
    ],
  },
  { path: 'cursos', component: Cursos },
  { path: 'cursos/detalhe', component: DetalheCurso },
  { path: 'professores', component: Professores },
  { path: 'professores/detalhe', component: DetalheProfessor },
];
