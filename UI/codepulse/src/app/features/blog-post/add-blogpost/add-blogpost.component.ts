import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddBlogPost } from '../../category/models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css'],
})
export class AddBlogpostComponent implements OnInit, OnDestroy {
  model: AddBlogPost;
  private addBlogPostSubscription?: Subscription;

  constructor(private blogPostService: BlogPostService, private router: Router) {
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
    this.addBlogPostSubscription = this.blogPostService.createBlogPost(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl("/admin/blogposts");
      }
    });
  }

  ngOnDestroy(): void {
    this.addBlogPostSubscription?.unsubscribe();
  }
}
