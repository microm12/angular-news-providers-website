import { Component, OnInit, Input } from '@angular/core';
import { NewsOutlet } from 'src/app/news.model';

@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',
  styleUrls: ['./main-item.component.css']
})
export class MainItemComponent implements OnInit {
  @Input() item: NewsOutlet;
  constructor() { }

  ngOnInit() {
  }

}
