import { Component, OnInit } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  constructor() {
    this.model = {
      name: '',
      urlHandle: '',
    };
  }

  ngOnInit(): void {}

  model: AddCategoryRequest;

  onFormSubmit() {
    console.log(this.model);
  }
}
