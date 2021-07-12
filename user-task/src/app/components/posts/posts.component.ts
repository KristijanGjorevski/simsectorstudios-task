import {
  Component,
  OnInit,
  OnChanges,
  Input,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Post } from '../../Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit, OnChanges {
  posts: Post[] = [];
  @Input() newPost: Post;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'newPost': {
            if (
              changes[propName].currentValue !== changes[propName].previousValue
            ) {
              console.log(changes[propName].previousValue);
              console.log(changes[propName].currentValue);
              this.postService.getPosts();
            }
          }
        }
      }
    }
  }

  deletePost(post: Post) {
    this.postService
      .deletePost(post)
      .subscribe(
        () =>
          (this.posts = this.posts.filter((curPost) => curPost.id !== post.id))
      );
  }
}
