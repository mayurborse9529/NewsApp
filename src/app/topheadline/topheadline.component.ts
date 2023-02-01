import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {
  // topheadlineData: any;


  constructor( private api:AuthService) { }
  topheadlineData:any=[];
  ngOnInit(): void {
  
    this.api.news().subscribe((res)=>{
      console.log(res.articles)
      this.topheadlineData=res.articles
    })
  }

}
