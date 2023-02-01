import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor( private auth:AuthService) { }
  topheadlineData:any=[];
  ngOnInit(): void {
    this.auth.sport().subscribe((res)=>{
      console.log(res.articles)
      this.topheadlineData=res.articles
    })
  }

}
