import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import Splide from "./splide.min";

@Component({
  selector: "app-home-carousel",
  templateUrl: "./home-carousel.component.html",
  styles: [],
})
export class HomeCarouselComponent implements OnInit {
  item: any = {
    url: this.domSanitizer.bypassSecurityTrustStyle(
      "background: linear-gradient(170deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 1)), url('../../assets/img/slider-2.jpg'); position: relative !important"
    ),
  };
  constructor(public domSanitizer: DomSanitizer) {}

  ngOnInit() {
    new Splide(".splide", {
      type: "loop",
      perPage: 1,
      speed: 2000,
      autoplay: 2000,
    }).mount();
  }
}
