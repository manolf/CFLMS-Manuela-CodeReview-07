import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  refs = [
    {
      name: "Oliver P.",
      age: 34,
      date: '2020-05-07 14:00',
      topic: "booked trip: Maledives",
      text: "Thank you so much! It was the best holiday I ever had: Booking services were very easy to use. I booked hotel, flight and a car rental with very little effort and was provided with a variety of different options along the way.",
      image: "../assets/img/elefant.JPG" 
    },{
      name: "Emino Haligali",
      age: 28,
      date: '2019-05-04 22:34',
      topic: "Hiking in Ushguli",
      text: "Oh my God, never again! Where did you find that strange mountain travel guide? He had just churches in sense and nothing else. We were looking for a holiday full of hiking and all we got was this tired history freak. The rest of the trip - of course - was perfect!",
      image: "../assets/img/pig.jpg" 
    },{
    name: "Marta Riviera",
    age: 41,
    date: '2018-05-04 22:34',
    topic: "Snakess of Australia",
    text: "Dear team! it was an awesome time in down under! thank you for the program - although I might need a therapist right now. Still feeling sand and insects all over my body..",
    image: "../assets/img/monkey.JPG" 
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
