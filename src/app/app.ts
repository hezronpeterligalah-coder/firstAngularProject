import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Products } from './products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstProject');
  login(){
    alert("Welcome!");
  }
  isRed = false;
  change(){
    this.isRed = !this.isRed;
  }
}
