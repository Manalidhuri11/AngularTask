import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CrudServiceService } from '../crud-service.service';
import { FormArray, FormControl, NgForm } from '@angular/forms';
import { promise } from 'selenium-webdriver';
import { formatCurrency } from '@angular/common';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css']
})
export class ListCandidateComponent implements OnInit {
  router: any;

  stringJson: string;
  stringObject: any;
  test;
  user: any = [];
  // contentEditable: boolean;
  Id: any;
  ngForm: any;
  selected: any;
  all: any;
  //checkAll = "true";


  constructor(private route: Router, private Http: HttpClientModule, private crudservice: CrudServiceService) {

  }



  ngOnInit() {

    this.getUserData();

  }


  getUserData() {

    this.crudservice.showData().subscribe((data) => {
      console.log("data", data);
      this.stringJson = JSON.stringify(data);

      this.user = JSON.parse(this.stringJson);



    });

  }


  add() {
    this.route.navigate(['/add-user'])
  }


  delete(Id) {
    let data = { "Id": Id }
    this.crudservice.deleteData(data).subscribe((Id) => {
      console.log("data-=-=-", Id);
      this.getUserData();

    });

  }





  edit(Id: number) {

    console.log("ID::::: ", Id)


    this.route.navigate(['/add-user/'], { queryParams: { Id: Id } });
  }



  selectedCheckbox: any = [];

  getSelection(user) {
    return this.selectedCheckbox.findIndex(s => s.Id === user.Id) !== -1;
  }
  changeHandler(user: any, event: KeyboardEvent) {

    console.log("user--->", user)
    const Id = user.Id;

    const index = this.selectedCheckbox.findIndex(u => u.Id === Id);
    console.log(index);
    if (index === -1) {
      // ADD TO SELECTION
      // this.selection.push(item);
      this.selectedCheckbox = [...this.selectedCheckbox, user];
      console.log(this.selectedCheckbox);
    } else {
      // REMOVE FROM SELECTION
      this.selectedCheckbox = this.selectedCheckbox.filter(u => u.Id !== user.Id)
      // this.selection.splice(index, 1)
      console.log(this.selectedCheckbox);
    }
  }

  deleteMultiple() {
    console.log("deleteMultiple fn called", this.selectedCheckbox);
    if (this.selectedCheckbox.length == 0) {
      alert("Select Data To Delete");
      return false;
    }
    let tempUser = []
    let payload = {
      user: []
    }

    for (let i = 0; i < this.selectedCheckbox.length; i++) {
      console.log("inside loop--->", this.selectedCheckbox[i]);
      tempUser = [...tempUser, { "Id": this.selectedCheckbox[i]['Id'] }];
    }
    console.log("tempUser--->", tempUser);
    payload.user = tempUser;
    console.log("payload--->", payload);

    this.crudservice.deleteMultipleData(payload).subscribe((res) => {
      console.log("res=====>", res);
      this.getUserData();
    })

  }


}
