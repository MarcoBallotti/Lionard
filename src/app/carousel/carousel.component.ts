import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  images: string[] = [];

  readonly BASE_URL = 'https://cdn.lionard.com/';

  @Input() photos!: string[];

  constructor() {
    console.log(this.images);
  }

  ngOnInit(): void {
    this.images = this.photos.map((img) => this.BASE_URL + img);
  }
}
