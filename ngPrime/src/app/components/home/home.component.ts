import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  public onClick(message: string) {
    this.messageService.add({
      summary: 'Message',
      detail: message,
      severity: 'info',
      sticky: false,
    });
  }
}
