import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {

  title: string = "Accueil";

  ngOnInit(): void {
      console.log("home init.");
  }

  ngOnDestroy(): void {
    console.log("home destroy.");
  }

}
