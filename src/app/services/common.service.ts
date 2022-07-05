import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackbar: MatSnackBar) { }

  openSnackbar(msg){
    console.log(msg);
    this.snackbar.open(msg, 'Dismiss', {duration: 3000});
  }
}
