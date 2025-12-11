import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularEx2');

  mostrarSelect() {
    const select = document.getElementById("llista") as HTMLSelectElement;
    const div = document.getElementById("resultat");

    let txt = "";

    for (let i = 0; i < select.options.length; i++) {
      txt += select.options[i].value + "<br>";
    }

    if (div) div.innerHTML = txt;
  }

}
