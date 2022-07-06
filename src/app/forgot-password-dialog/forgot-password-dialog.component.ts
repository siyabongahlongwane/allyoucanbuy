import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { CommonService } from "../services/common.service";

@Component({
  selector: "app-forgot-password-dialog",
  templateUrl: "./forgot-password-dialog.component.html",
  styleUrls: [],
})
export class ForgotPasswordDialogComponent implements OnInit {
  submitted: boolean = false;
  reset: any = {
    email: null,
  };
  constructor(public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>, private common: CommonService) {}

  ngOnInit() {}

  captureUserEmail(form) {
    if (form.invalid) {
      // Open snackbar from service
      this.common.openSnackbar('Email field is required!');
      return false;
    } else {
      this.dialogRef.close(form.value);
    }
  }

  closeDialog(){
    this.common.openSnackbar('You cancelled!');
    this.dialogRef.close();
  }

}
