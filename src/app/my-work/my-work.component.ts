import { Component, OnInit } from '@angular/core';

interface Proj {
  title: string;
  desc: string;
  thumbnailUrl: string;
  viewLink: string;
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
      viewLink: '',
    });
    this.projects.push({
      title: 'NutriFood (First Runner-up Winner)',
      desc: 'Angular + Java EE App',
      thumbnailUrl: './assets/imgs/work/nutrifood.gif',
      viewLink:
        'https://uvents.nus.edu.sg/event/18th-steps/module/IS3106/project/5',
    });
    this.projects.push({
      title: '6MWT (First Runner-up Winner)',
      desc: 'React Native Mobile App w/ Singhealth',
      thumbnailUrl: './assets/imgs/work/6mwt.gif',
      viewLink:
        'https://uvents.nus.edu.sg/event/18th-steps/module/IS4250/project/4',
    });
    this.projects.push({
      title: 'Spotify Message',
      desc: 'React Web App integrating the Spotify API',
      thumbnailUrl: './assets/imgs/work/spotifymessage.jpeg',
      viewLink: 'https://devpost.com/software/spotify-message',
    });
    this.projects.push({
      title: 'pewpew',
      desc: 'MEAN Stack Web App for NUS Orbital',
      thumbnailUrl: './assets/imgs/work/pewpew.png',
      viewLink: '',
    });
    this.projects.push({
      title: 'ESCAPE!',
      desc: 'Top-down 2D Arcade Game w/ DirectX',
      thumbnailUrl: './assets/imgs/work/escape.png',
      viewLink: '',
    });
    this.projects.push({
      title: 'ARRR!!!',
      desc: '2D Arcade Game w/ DirectX',
      thumbnailUrl: './assets/imgs/work/arrr.png',
      viewLink: '',
    });
    this.projects.push({
      title: 'Compassionate Delights',
      desc:
        'Native Android Mobile App to encourage donations for the Community Chest.',
      thumbnailUrl: './assets/imgs/work/compassionatedelights.png',
      viewLink: '',
    });
  }
}
