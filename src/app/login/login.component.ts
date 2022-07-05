import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ForgotPasswordDialogComponent } from "../forgot-password-dialog/forgot-password-dialog.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  isLogin: boolean = true;
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
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.openResetDialog();
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
  resetUserPassword() {}
}
