import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
	heroHeading: string;
	heroText: string;
	heroBtnText: string;
  heroBtnUrl: string;
  
  constructor() { 
    this.heroHeading =  "Adventure may hurt...";
    this.heroText =  "  but monotony kills! Use the opportunity to get to know with us new landscapes, get involved with nature and destiny. Become the real version of yourself! ";
    this.heroBtnText =  "Explore";
    this.heroBtnUrl =  "/travels";
  }

  ngOnInit(): void {
  }

}
