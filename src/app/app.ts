import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelaProdutos } from "./tabela-produtos/tabela-produtos";

@Component({
  selector: 'app-root',
  imports: [TabelaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
