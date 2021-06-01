import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CrudServiceService } from '../crud-service.service';
import { FormArray, FormControl, NgForm } from '@angular/forms';
import { promise } from 'selenium-webdriver';

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
  user: any;
  // contentEditable: boolean;
  id: any;
  ngForm: any;
  //checkAll = "true";


  constructor(private route: Router, private Http: HttpClientModule, private crudservice: CrudServiceService) {

  }



  ngOnInit() {
  
    this.getUserData();

  }


  getUserData(){

    this.crudservice.showData().subscribe((data) => {
      console.log("data", data);
      this.stringJson = JSON.stringify(data);

      this.user = JSON.parse(this.stringJson);



    });

  }


  add() {
    this.route.navigate(['/add-user'])
  }


  delete(id) {
    let data = { "id": id }
    this.crudservice.deleteData(data).subscribe((id) => {
      console.log("data", id);
      this.getUserData();
      // this.route.navigate(['/list-candidate']);
    });
    /* let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate([currentUrl]); */
  }





  edit(id: number) {

    console.log("ID::::: ", id)


    this.route.navigate(['/add-user/'], { queryParams: { id: id } });
  }






}
