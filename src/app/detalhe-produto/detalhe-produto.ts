import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalhe-produto.html',
  styleUrls: ['./detalhe-produto.css'],
})
export class DetalheProduto {}
