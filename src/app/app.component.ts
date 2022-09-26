import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asm-sept-2022';

  doMagic(): void{
    this.title = this.title.toUpperCase();
  }
  doMagicAgain(): void{
    this.title = this.title.toLowerCase();
  }
}
