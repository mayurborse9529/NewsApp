import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  
  constructor(private auth:AuthService) { }
  topheadlineData:any=[];
  ngOnInit(): void {
    this.auth.science().subscribe((res)=>{
      console.log(res.articles)
      this.topheadlineData=res.articles
    })
  }

}
