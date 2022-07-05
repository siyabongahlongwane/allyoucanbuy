import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BecomeAVendorComponent } from "./become-avendor/become-avendor.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";
import { ContainerComponent } from "./container/container.component";
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./login/login.component";
import { ShopComponent } from "./shop/shop.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "store/home" },
  { path: "login", component: LoginComponent },
  {
    path: "store",
    component: ContainerComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: LandingComponent },
      { path: "about", component: AboutComponent },
      { path: "shop", component: ShopComponent },
      { path: "blog", component: BlogComponent },
      { path: "contact", component: ContactComponent },
      { path: "become-a-vendor", component: BecomeAVendorComponent },
    ],
  },
  { path: "**", pathMatch: "full", redirectTo: "store/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
