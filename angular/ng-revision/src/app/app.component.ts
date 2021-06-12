// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
// }

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //Update this template
  template: `<div>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  </div>`,
})
export class ShoppingList implements OnInit {
  @Input() items!: string[];
  ngOnInit(): void {
    console.log(this.items);
  }
}
