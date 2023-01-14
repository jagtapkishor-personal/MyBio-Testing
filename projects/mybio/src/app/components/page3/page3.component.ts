import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  pName: any;

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.service.products().subscribe( (res) => {
      this.pName =  (res);
      console.table(this.pName);
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      })
  }
  getid(e:any)
  {
      console.log("data in parent",e);
      
  }
}
