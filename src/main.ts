import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ExternalLinkDirective } from './external-link.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExternalLinkDirective],
  template: `
    <h1>
      <a href="https://coryrylan.com/blog/managing-external-links-safely-in-angular">
        Managing External Links Safely in Angular
      </a>
    </h1>

    <a href="https://angular-sp7z3d.stackblitz.io#1">Link Internal</a>

    <br /><br />

    <a href="https://{{dynamic}}#1">Link Internal Dynamic</a>

    <br /><br />

    <a href="https://coryrylan.com/blog/managing-external-links-safely-in-angular">Link External</a>
  `,
})
export class App {
  dynamic = 'angular-sp7z3d.stackblitz.io';
}

bootstrapApplication(App);
