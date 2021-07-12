import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/Post';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter();
  title: string;
  body: string;
  showAddPost: boolean;
  subscription: Subscription;
  //@todo - emit for post adding

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddPost = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.title) {
      alert('Please add a Title');
      return;
    }
    if (!this.body) {
      alert('You need to add a description');
      return;
    }

    const newPost = {
      body: this.body,
      title: this.title,
    };

    this.onAddPost.emit(newPost);

    this.title = '';
    this.body = '';
  }
}
