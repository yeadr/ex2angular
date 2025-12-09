import { Component, signal } from '@angular/core';
import { Ex1 } from './ex1/ex1';
import { Ex2 } from './ex2/ex2';
import { Ex3 } from './ex3/ex3';
import { Ex4 } from './ex4/ex4';
import { Ex5 } from './ex5/ex5';
import { Ex6 } from './ex6/ex6';

@Component({
  selector: 'app-root',
  imports: [Ex1, Ex2, Ex3, Ex4, Ex5, Ex6],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularEx2');
}
