import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .white-text{
    color: white;
}

  `]
})
export class AppComponent {
  showSecret =false;
  log:any =[];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);

  }
}
