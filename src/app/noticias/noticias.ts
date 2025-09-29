import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './noticias.html',
  styleUrls: ['./noticias.css'],
})
export class Noticias {}
