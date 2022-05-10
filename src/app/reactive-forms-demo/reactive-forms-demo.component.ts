import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrls: ['./reactive-forms-demo.component.css'],
})
export class ReactiveFormsDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    alert(this.profileForm.value);
  }
}
