import { Component } from '@angular/core';
import { MyservService } from './allserv/myserv.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showTable';
  public data: Object[] = [];
  constructor (private myserv:MyservService){}

  ngOnInit(){
    this.myserv.getData().subscribe(res=>{
      console.log(res)
      this.data = res;
    })
  }
}
