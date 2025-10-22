import { Component } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from "@angular/forms";
import { NOTES } from '../notes';

@Component({
  selector: 'app-add-note',
  imports: [ReactiveFormsModule],
  templateUrl: './add-note.html',
  styleUrl: './add-note.css'
})
export class AddNote {
  addNoteForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    text: new FormControl('')
  });
  addNote() {
    let title = this.addNoteForm.value.title ?? '';
    let text = this.addNoteForm.value.text ?? '';

    if (this.addNoteForm.valid) {
      let ids = NOTES.map((a) => a.id);
      let maxId = 0;
      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }
      let newNote = {
        id: maxId + 1,
        title: title,
        text: text,
      };
      NOTES.unshift(newNote);
      this.addNoteForm.reset();
    }
  }
}
