import {Component, inject} from '@angular/core';
import { NOTES } from '../notes';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  templateUrl: './note-detail.html',
  styleUrl: './note-detail.css',
  imports: [RouterModule],
})
export class NoteDetail{
    activeRoute = inject(ActivatedRoute);
    id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    note = NOTES.find((i) => i.id === this.id);
}