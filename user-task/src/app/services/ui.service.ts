import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddPost: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddPost(): void {
    this.showAddPost = !this.showAddPost;
    this.subject.next(this.showAddPost);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
