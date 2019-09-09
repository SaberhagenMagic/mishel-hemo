import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class SnackMessageService {

  private default = new MatSnackBarConfig();

  constructor(private snackBar: MatSnackBar) {
    this.default.duration = 2500;
    this.default.verticalPosition = 'top';
  }

  showMessage(msg: string, action: string = '', config: MatSnackBarConfig = this.default) {
    this.snackBar.open(msg, action, config);
  }
}
