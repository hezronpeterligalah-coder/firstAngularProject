import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: '<h1>{{ title }}</h1>',
  styleUrl: './header.css',
})
export class Header {
  title = 'My Notes';
}
