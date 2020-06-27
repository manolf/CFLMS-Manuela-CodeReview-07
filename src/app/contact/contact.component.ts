import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted: boolean = false;
  
  info = new FormGroup({
   firstName: new FormControl('',[Validators.pattern('[a-zA-Z ]*')]),
   lastName: new FormControl('',[Validators.pattern('[a-zA-Z ]*')]),
   destination: new FormControl('',[Validators.pattern('[a-zA-Z ]*')]),
  email:new FormControl('', [Validators.required,Validators.minLength(3)]),
  text: new FormControl('',Validators.required)
});

//Validators required: not working

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this.submitted = true;
    //info never gets valid, therefore commented, 
    //2do: correct validation
    //last name! null?
     //if(this.info.valid){
    var a = this.info.value;
      console.log(a)
      //window.alert(`Thank you ${a.firstName} ${a.lastName}, we well get in touch with you!`);
      //test import sweetalert
      Swal.fire({
        text: `Thank you ${a.firstName} ${a.lastName}, we well get in touch with you!`,
        icon: 'success'
      });

      this.info.reset();
      this.submitted= false;
     //}
    }

  //   opensweetalert()
  // {
  //   Swal.fire({
  //       text: 'Hello!',
  //       icon: 'success'
  //     });
  // }
  // opensweetalertdng()
  // {
  //  Swal.fire('Oops...', 'Something went wrong!', 'error')
  // }
  
  // opensweetalertcst(){
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: 'You will not be able to recover this imaginary file!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, keep it'
  //   }).then((result) => {
  //     if (result.value) {
  //     Swal.fire(
  //       'Deleted!',
  //       'Your imaginary file has been deleted.',
  //       'success'
  //     )
  //     // For more information about handling dismissals please visit
  //     // https://sweetalert2.github.io/#handling-dismissals
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //     Swal.fire(
  //       'Cancelled',
  //       'Your imaginary file is safe :)',
  //       'error'
  //     )
  //     }
  //   })
  // }

}
