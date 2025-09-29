import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.css'],
})
export class Cursos {}
