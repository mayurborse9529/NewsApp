import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-helth',
  templateUrl: './helth.component.html',
  styleUrls: ['./helth.component.css']
})
export class HelthComponent implements OnInit {

  constructor( private auth:AuthService) { }
  topheadlineData:any=[];
  ngOnInit(): void {
    this.auth.helth().subscribe((res)=>{
      console.log(res.articles)
      this.topheadlineData=res.articles
    })
  }

}
