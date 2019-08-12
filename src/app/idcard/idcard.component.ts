import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent implements OnInit {
  message:string;
  // @Input() childMessage: string;
  @Input() imessage: any;
  @Input() imessages: any;
  @Input() imessagess: any;
  @Input() imessagesss: any;





  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)

  }

}
