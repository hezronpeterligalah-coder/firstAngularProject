import { Component } from '@angular/core';
import { Header } from './header/header';
import { NotesList } from './notes-list/notes-list';
import { AddNote } from './add-note/add-note';


@Component({
  selector: 'app-root',
  imports: [Header, NotesList, AddNote],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
