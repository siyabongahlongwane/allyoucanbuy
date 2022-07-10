import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ActiveUserGuard } from "./guards/active-user.guard";
import { BecomeAVendorComponent } from "./become-avendor/become-avendor.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";
import { ContainerComponent } from "./container/container.component";
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./login/login.component";
import { ShopComponent } from "./shop/shop.component";
import { IsLoggedInGuard } from "./guards/is-logged-in.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "store/home",
    canActivate: [ActiveUserGuard],
  },
  { path: "login", component: LoginComponent, canActivate: [IsLoggedInGuard] },
  {
    path: "store",
    component: ContainerComponent,
    // canActivate: [ActiveUserGuard],
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
