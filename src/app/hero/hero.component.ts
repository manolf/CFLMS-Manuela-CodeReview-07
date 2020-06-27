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
    this.heroHeading =  "Adventure may hurt you...";
    this.heroText =  "  but monotony will kill you! Use the opportunity to get to know with us new landscapes, get involved with nature and destiny. Become the real version of yourself! ";
    this.heroBtnText =  "explore";
    this.heroBtnUrl =  "/travels";
  }

  ngOnInit(): void {
  }

}
