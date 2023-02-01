import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private auth:AuthService) { }
  topheadlineData:any=[];

  ngOnInit(): void {
    this.auth.apcnews().subscribe((res)=>{
      console.log(res.articles)
      this.topheadlineData=res.articles
    })
  }

}
