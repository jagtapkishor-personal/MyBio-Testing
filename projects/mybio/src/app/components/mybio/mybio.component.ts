import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mybio',
  templateUrl: './mybio.component.html',
  styleUrls: ['./mybio.component.css']
})
export class MybioComponent implements OnInit {
title1="";
title2="";
title3="";


  constructor() { 
    setTimeout(()=>{
    this.title1="Full";
  },1000);
  setTimeout(()=>{
    this.title2="Stack";
  },1500);
  setTimeout(()=>{
    this.title3="Developer";
  },2000);
  }

  ngOnInit(): void {
  }
  
    
  
}
