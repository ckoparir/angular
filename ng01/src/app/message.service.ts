import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    // TODO: sends the messages _after_ fetching the heroes
    this.messages.push(message);
  }
  clear() {
    // TODO: clears the message caches
    this.messages = [];
  }
}
