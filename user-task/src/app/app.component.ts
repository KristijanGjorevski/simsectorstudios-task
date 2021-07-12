import { Component, Output } from '@angular/core';
import { Post } from './Post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Output() postedNewItem: Post;
  constructor(private postService: PostService) {}

  addPost(post: Post) {
    this.postService.addPost(post).subscribe();
    this.postedNewItem = post;
    //@todo - update posts
  }
}
