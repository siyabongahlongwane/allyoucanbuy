import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [],
})
export class HeaderComponent implements OnInit {
  @Output() getCurrentRoute = new EventEmitter<{route: string}>();
  socials: any[] = [
    {
      icon: "../../assets/img/facebook.png",
      label: "facebook",
      url: "",
    },
    {
      icon: "../../assets/img/instagram.png",
      label: "instagram",
      url: "",
    },
    {
      icon: "../../assets/img/whatsapp.png",
      label: "whatsapp",
      url: "",
    },
  ];

  categories: string[] = [
    "Beauty",
    "Man",
    "Women",
    "Tech",
    "Phone",
    "Laptop",
    "Camera",
  ];

  navItems: any[] = [
    {
      name: "HOME",
      route: "home",
    },
    {
      name: "ABOUT",
      route: "about",
    },
    {
      name: "SHOP",
      route: "shop",
    },
    {
      name: "BLOG",
      route: "blog",
    },
    {
      name: "CONTACT",
      route: "contact",
    },
    {
      name: "BECOME A VENDOR",
      route: "become-a-vendor",
    },
  ];
  constructor(public router: Router) {}



  sendCurrentRoute(route){
    this.getCurrentRoute.emit(route);
  }
  ngOnInit() {}
}
