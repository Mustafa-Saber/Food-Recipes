import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  features: any[] = [
    {
      icon: 'fas fa-hourglass-half',
      feature: 'Quick',
    },
    {
      icon: 'fas fa-mitten',
      feature: 'Easy',
    },
    {
      icon: 'fab fa-creative-commons-nc',
      feature: 'Cheap',
    },
    {
      icon: 'fas fa-heart',
      feature: 'Healthy',
    },
  ];
}
