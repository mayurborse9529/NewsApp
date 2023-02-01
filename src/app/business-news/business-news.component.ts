import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {
  

  constructor( private auth:AuthService) { }
  topheadlineData:any=[];
  ngOnInit(): void {
    this.auth.mynews().subscribe((res)=>{
      console.log(res.articles)
      this.topheadlineData=res.articles
    })
   
    
  }

}
