import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { NotesList } from './notes-list/notes-list';
import { AddNote } from './add-note/add-note';

const routes: Routes = [
  { path: '', component: NotesList },
  { path: 'new', component: AddNote },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
