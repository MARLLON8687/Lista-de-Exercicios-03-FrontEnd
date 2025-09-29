import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalhe-usuario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalhe-usuario.html',
  styleUrls: ['./detalhe-usuario.css'],
})
export class DetalheUsuario {}
