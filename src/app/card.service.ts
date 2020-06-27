import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  items = [];
  constructor() { }
  addToCard(product) {
    this.items.push(product);
  }
 
  getItems() {
    return this.items;
  }
 
  clearCard() {
    this.items = [];
    return this.items;
  }

  calculatePrice(){
    let sum : number = 0;
    for (let item of this.items){
      sum += item.price;
    }
    return sum.toFixed(2);
  }

  calculateDiscount(sum){
    let discount : number;
    if ((sum > 200)&& (sum <= 500)){
      discount = 0.1;
    }
    else if (sum > 500){
      discount = 0.2;
    } else{
      discount = 1; //otherwise undefined! 
    }
    console.log("sum = " +sum);
    console.log("discount =" + discount);
    return (discount*sum);

  }

  calculateNewSum(sum : number, discount : number){
    
    return (sum - discount).toFixed(2);


  }

  
}