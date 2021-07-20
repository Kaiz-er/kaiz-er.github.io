import { Component, OnInit } from '@angular/core';

interface Proj {
  title: string;
  desc: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent implements OnInit {
  projects: Proj[] = [];

  constructor() {}

  ngOnInit(): void {
    this.projects.push({
      title: 'Make-it-an-album',
      desc: 'Node App w/ JIMP API',
      thumbnailUrl: '',
    });
    this.projects.push({
      title: 'NutriFood',
      desc: 'Angular + Java EE App',
      thumbnailUrl: './assets/imgs/work/nutrifood.gif',
    });
    this.projects.push({
      title: '6MWT',
      desc: 'React Native Mobile App w/ Singhealth',
      thumbnailUrl: './assets/imgs/work/6mwt.gif',
    });
    this.projects.push({
      title: 'Spotify Message',
      desc: 'React Web App integrating the Spotify API',
      thumbnailUrl: './assets/imgs/work/spotifymessage.jpeg',
    });
    this.projects.push({
      title: 'pewpew',
      desc: 'MEAN Stack Web App for NUS Orbital',
      thumbnailUrl: './assets/imgs/work/pewpew.png',
    });
    this.projects.push({
      title: 'ESCAPE!',
      desc: 'Top-down 2D Arcade Game w/ DirectX',
      thumbnailUrl: './assets/imgs/work/escape.png',
    });
    this.projects.push({
      title: 'ARRR!!!',
      desc: '2D Arcade Game w/ DirectX',
      thumbnailUrl: './assets/imgs/work/arrr.png',
    });
    this.projects.push({
      title: 'Compassionate Delights',
      desc:
        'Native Android Mobile App to encourage donations for the Community Chest.',
      thumbnailUrl: './assets/imgs/work/compassionatedelights.png',
    });
    console.log(this.projects);
  }
}
