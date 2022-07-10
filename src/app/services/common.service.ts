import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackbar: MatSnackBar) { }
  getUser() {
    return JSON.parse(localStorage.getItem('userObj'));
  }

  storeUser(user) {
    localStorage.setItem('userObj', JSON.stringify(user));
  }

  openSnackbar(msg) {
    this.snackbar.open(msg, 'Dismiss', { duration: 3000 });
  }
}
