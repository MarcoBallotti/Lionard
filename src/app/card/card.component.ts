import { Component, Input, OnInit } from '@angular/core';
import { RealEstate } from '../realestate.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() props!: RealEstate;

  ngOnInit(): void {}
}
