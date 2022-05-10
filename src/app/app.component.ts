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
  getEmpData: Array<{ ids: number; names: string }> = [];
  
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
