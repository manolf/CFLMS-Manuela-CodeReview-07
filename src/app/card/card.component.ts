import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  items;
  sum;
  checkoutForm;
  discount;
  newSum;

  constructor(private cardService: CardService,  private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit() {
    this.items = this.cardService.getItems();
    this.sum = this.cardService.calculatePrice(); 
    this.discount = this.cardService.calculateDiscount(this.sum);
    this.newSum = this.cardService.calculateNewSum(this.sum,this.discount);
  }

  // onDeleteButton(index){
  //   this.cardService.deleteItem(index)
  // }

  onSubmit(customerData) {
    // Process checkout data here
    console.table('Your order has been submitted', customerData);
    Swal.fire({
      text: `Thank you! Your travel order has been submitted`,
      icon: 'success'
    });
 
    this.items = this.cardService.clearCard();
    this.checkoutForm.reset();
    this.sum = this.cardService.calculatePrice();
    this.discount = this.cardService.calculateDiscount(this.sum);
    this.newSum = this.cardService.calculateNewSum(this.sum,this.discount);
  }

}
