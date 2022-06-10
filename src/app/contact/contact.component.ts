import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styles: [],
})
export class ContactComponent implements OnInit {
  submitted: boolean = false;
  contact: any = {
    name: null,
    email: null,
    phone: null,
    subject: null,
    message: null,
  };

  contactDetails: any[] = [
    {
      icon: "place",
      text: "Crystal Park, Benoni",
    },
    {
      icon: "phone",
      text: "067 014 6942",
    },
    {
      icon: "mail",
      text: "enquiries@allyoucanbuy.co.za",
    },
  ];
  constructor() {}

  ngOnInit() {}

  sendMessage(form){
    if(form.invalid){
      this.submitted = true;
      return false;
    } else{
      console.log(form.value);
    }
  }
}
