import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import {travels} from '../travels';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  travel;
  purchased: boolean = false;
  nextId;

  constructor(private route: ActivatedRoute, private cardService: CardService) { }


  addToCard(travel) {
    // window.alert('The trip has been added to your travel cart');
    Swal.fire({
      text: `The trip has been added to your travel cart`,
      icon: 'success'
    });
    this.purchased = true;
    this.cardService.addToCard(travel);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.travel = travels[+params.get('travelId')];
      console.log(this.travel);
      this.nextId = this.travel + 1;
      console.log(this.nextId);
    });
  }

}
