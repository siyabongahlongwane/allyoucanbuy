import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../services/common.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: any = false;
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

  accountNav: any[] = [
    {
      icon: 'account_circle',
      name: "My Profile",
      route: "../profile",
      disabled: this.isLoggedIn
    },
    {
      icon: 'money',
      name: "My Orders",
      route: "../orders",
      disabled: this.isLoggedIn
    },
    {
      icon: 'power_settings_new',
      name: "Logout",
      route: "",
      disabled: this.isLoggedIn
    }
  ]
  user: any;
  constructor(public router: Router, private common: CommonService) {}


  ngOnInit() {
    if(this.common.getUser()){
      this.user = this.common.getUser();
      this.isLoggedIn = true;
    }
  }

  logout(){
    localStorage.removeItem('userObj');
    this.router.navigate(['../login'])
  }

  navigate(route){
    if(route === ''){
      this.logout()
    } else{
      this.router.navigate(route);
    }
  }
}
