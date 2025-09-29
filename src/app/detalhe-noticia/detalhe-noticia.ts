import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalhe-noticia',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalhe-noticia.html',
  styleUrls: ['./detalhe-noticia.css'],
})
export class DetalheNoticia {}
