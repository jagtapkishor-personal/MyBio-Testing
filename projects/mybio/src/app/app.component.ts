import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mybio';
  name1: string;
  name2: string;
  name: any;
  name3: string;
  constructor(){
    this.name=setTimeout(() => {
      this.name1="Front"
    }, 1000);
    this.name=setTimeout(() => {
      this.name2="End"
    }, 1300);
    this.name=setTimeout(() => {
      this.name3="Developer"
    }, 1500);    
  }

  card=[
    {
      name:"name1",
      img:"../assets/mv2.jpeg"
    },
    {
      name:"name1",
      img:"../assets/mv2.jpeg"
    },
    {
      name:"name1",
      img:"../assets/mv2.jpeg"
    }
    
  ]
}
