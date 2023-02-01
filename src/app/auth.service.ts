import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  newsone='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1a87b630f5a54b6997749c943d1fdf39'
   
  topnews='https://newsapi.org/v2/top-headlines?country=in&apiKey=1a87b630f5a54b6997749c943d1fdf39'
 
  helthnews='https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1a87b630f5a54b6997749c943d1fdf39'
  

  sciencenews='https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=1a87b630f5a54b6997749c943d1fdf39'  

  
  Entertainment='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1a87b630f5a54b6997749c943d1fdf39'

  
  sportsnews='https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=1a87b630f5a54b6997749c943d1fdf39'
  news():Observable<any>{
        return this.http.get(this.topnews)
   }
   mynews():Observable<any>{
      return this.http.get(this.newsone)
   }
   sport():Observable<any>{
          return this.http.get(this.sportsnews)
   }
   helth():Observable<any>{
      return this.http.get(this.helthnews)
   }
   apcnews():Observable<any>{
        return this.http.get(this.Entertainment)
   }
   science():Observable<any>{
    return this.http.get(this.sciencenews)
}
}
