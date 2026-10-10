import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  title: string = 'Accueil';

  ngOnInit(): void {
    console.log('home init.');
  }

  ngOnDestroy(): void {
    console.log('home destroy.');
  }
}
