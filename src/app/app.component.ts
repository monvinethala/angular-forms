import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employees: Array<{ id: number; name: string }> = [
    { id: 1, name: 'Ram' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Franc' },
    { id: 4, name: 'Andrew ' },
  ];
  user: Array<{ name: string }> = [{ name: 'hello' }];
  updateUserList(data: any) {
    console.log(data.userList);
    for (let i in this.user) {
      this.user.push(data.userList);
    }
  }
}

setTimeout(function () {
  console.log('Hello World!');
}, 2000);

var wait = new Promise(function (resolve, reject) {
  setTimeout(resolve, 2000);
}).then(function () {
  console.log('Hello World!');
});

var wait = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000);
}).then(() => {
  console.log('Hello World!');
});
//spread operators

//var num = [...num1, ...num2];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
