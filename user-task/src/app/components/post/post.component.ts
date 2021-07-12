import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../Post';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() onDeletePost: EventEmitter<Post> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  deleteClick(post) {
    this.onDeletePost.emit(post);
  }
}
