import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(x: any) {
    console.log(x);
  }

  onSubmitForm(value: NgForm) {
    console.log(value);
  }
}
