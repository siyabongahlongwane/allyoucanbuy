import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { ForgotPasswordDialogComponent } from "../forgot-password-dialog/forgot-password-dialog.component";
import { ApiService } from "../services/api.service";
import { CommonService } from "../services/common.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  isLogin: boolean = true;
  showPassword: boolean = false;
  register: any = {
    name: null,
    phone: null,
    email: null,
    password: null,
  };
  login: any = {
    email: null,
    password: null,
  };
  constructor(private dialog: MatDialog, private common: CommonService, private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  openResetDialog() {
    let dialogRef = this.dialog.open(ForgotPasswordDialogComponent, {
      width: "30vw",
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        // Send email to API
        // open snackbar from service
        console.log("email in parent component", res);
      }
    });
  }
  resetUserPassword() { }

  loginUser(form) {
    if (form.invalid) {
      this.common.openSnackbar('All fields are required!');
      return false;
    } else {
      let userDetailsStr = `email=${form.value.email}&password=${form.value.password}`
      this.api.login('users/login?' + userDetailsStr).subscribe(res => {
        if (res) {
          this.common.openSnackbar(res.msg);
          this.common.storeUser(res.user);
          this.router.navigate(['../store/home']);
        }
      }, err => {
        console.log(err);
        this.common.openSnackbar(err.error.msg);
      });
    }
  }

  registerUser(form) {
    if (form.invalid) {
      // open snackbar from service
      this.common.openSnackbar('All fields are required!');
      return false;
    } else {
      // send data to API
    }
  }
}
