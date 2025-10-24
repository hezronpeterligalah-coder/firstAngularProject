import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { NotesList } from './notes-list/notes-list';
import { AddNote } from './add-note/add-note';
import { NoteDetail } from './note-detail/note-detail';

const routes: Routes = [
  { path: '', component: NotesList },
  { path: 'new', component: AddNote },
  { path: 'note/:id', component: NoteDetail },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
