import { NewsOutlet } from './news.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  sources = new Subject<NewsOutlet[]>();
  private apiKey: '0ac59a1513604835b25eb13a55354612';

  constructor(private http: HttpClient) { }

  loadOutlets() {
    // auth error if I try to load api key from variable
    this.http.get<{ sources: NewsOutlet[]; }>('https://newsapi.org/v2/sources?apiKey=0ac59a1513604835b25eb13a55354612')
      .subscribe(response => {
        // console.log(response);
        // console.log(response.sources);
        this.sources.next(response.sources);
        console.log(this.sources);

      });
  }
}
