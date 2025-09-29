import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './professores.html',
  styleUrls: ['./professores.css']
})
export class Professores {}