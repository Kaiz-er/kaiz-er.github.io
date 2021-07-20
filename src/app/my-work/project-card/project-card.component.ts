import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  constructor() {}

  @Input() title = '';
  @Input() desc = '';
  @Input() thumbnailImg = '';

  ngOnInit(): void {
    $('.card')
      .delay(1800)
      .queue(function (next) {
        $(this).removeClass('hover');
        $('a.hover').removeClass('hover');
        next();
      });
  }

  getUrl() {
    return 'url(' + this.thumbnailImg + ')';
  }
}
