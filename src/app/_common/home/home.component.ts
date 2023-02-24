import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
      // this.dialog.open(DialogComponent);
  }

}
