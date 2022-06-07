import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [],
})
export class HeaderComponent implements OnInit {
  socials: any[] = [
    {
      icon: "../../assets/img/facebook.png",
      label: "facebook",
      url: ''
    },
    {
      icon: "../../assets/img/instagram.png",
      label: "instagram",
      url: ''
    },
    {
      icon: "../../assets/img/whatsapp.png",
      label: "whatsapp",
      url: ''
    },
  ];

  categories: string[] = [
    'Beauty',
    'Man',
    'Women',
    'Tech',
    'Phone',
    'Laptop',
    'Camera',
  ]
  constructor() {}

  ngOnInit() {}
}
