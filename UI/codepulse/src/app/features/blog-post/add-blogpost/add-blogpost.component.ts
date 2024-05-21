import { Component, OnInit } from '@angular/core';
import { AddBlogPost } from '../../category/models/add-blog-post.model';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css'],
})
export class AddBlogpostComponent implements OnInit {
  model: AddBlogPost;

  constructor() {
    this.model = {
      title: '',
      shortDescription: '',
      content: '',
      featuredImageUrl: '',
      urlHandle: '',
      author: '',
      publishedDate: new Date(),
      isVisible: true,
    };
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    throw new Error('Method not implemented.');
  }
}
