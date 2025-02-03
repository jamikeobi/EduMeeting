import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-dev',
  templateUrl: './angular-dev.component.html',
  styleUrls: ['./angular-dev.component.css']
})
export class AngularDevComponent {
  showTagline = false;

  ngOnInit(): void {
    // Show tagline after 4 seconds
    setTimeout(() => {
      this.showTagline = true;
    }, 4000);
  }
}
