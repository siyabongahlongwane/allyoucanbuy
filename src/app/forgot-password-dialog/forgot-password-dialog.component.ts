import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

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
  constructor(public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>) {}

  ngOnInit() {}

  captureUserEmail(form) {
    if (form.invalid) {
      // Open snackbar from service
      return false;
    } else {
      // Send email to parent
      console.log('form in parent component', form.value);
      this.dialogRef.close(form.value);
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
