import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  @Input() data?: any
  @Output() dataid: EventEmitter<any> = new EventEmitter<any>();

  pName: any;

  constructor() { }

  ngOnInit(): void { }
  goto(id: any) {
    this.dataid.emit(id)
  }

}
