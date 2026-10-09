import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Link {
  name: string;
  url: string;
  urlChildren: string[]
}

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})

export class NavBar {

  //links: Link[] = [
  //  {name: 'Home', url: '/home'},
  //  {name: 'Exo Un', url: '/exercices/exo-1'},
  //  {name: 'Exo Deux', url: '/exercices/exo-2'},
  //  {name: 'Exo Trois', url: '/exercices/exo-3'},
  //  {name: 'Exo Quatre', url: '/exercices/exo-4'},
  //]

  links: Link[] = [
    {name: 'Home', url: '/home', urlChildren: [
      '/home'
    ]},
    {name: 'Exercices', url: '/exercices', urlChildren: [
      '/exo-1',
      '/exo-2',
      '/exo-3',
      '/exo-4',
      '/exo-5',
    ]},
  ];


  linkSelected: string = '';

  selectLink(event: Event): void {
    this.linkSelected = (event.target as HTMLElement).innerText;
  }

}
