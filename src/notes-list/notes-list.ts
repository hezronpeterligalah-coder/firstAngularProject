import { Component } from '@angular/core';
import { NOTES } from '../notes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl: './notes-list.html',
  styleUrl: './notes-list.css',
  imports: [RouterModule],
})
export class NotesList {
  notes = NOTES;

  show(title: string) {
    alert(title);
  }
}
