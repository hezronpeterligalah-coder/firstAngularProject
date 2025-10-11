import { Component } from '@angular/core';
import { Header } from './header/header';
import { NotesList } from './notes-list/notes-list';

@Component({
  selector: 'app-root',
  imports: [Header, NotesList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
