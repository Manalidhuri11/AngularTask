import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { CrudServiceService } from '../crud-service.service';
import { stringify } from '@angular/compiler/src/util';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  id: any;
  stringJson: string;
  // email='';
  // name='';
  // contact;
  operation = "insert";

  model: any = {
    email: '',
    name: '',
    contact: '',
  }

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private Http: HttpClientModule, private crudservice: CrudServiceService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const id = params['Id'];
      this.id = id;
      if (id != undefined || id != null) { this.operation = "update" }
      console.log("id======", id);
    })

    if (this.operation == "update") {
      let data = { "id": this.id }
      console.log(data);
      this.crudservice.selectSingleRecord(data).subscribe((res: any) => {
        console.log("RES of selectUser:::::", res)
        this.model.name = res.FirstName;
        this.model.email = res.Email;
        this.model.contact = res.Contact;
      });
    } else { console.log("NEW USER") }
  }

  cancel() {
    this.route.navigate(['/list-candidate'])
  }



  onSubmit(form: NgForm) {
    if (this.operation == "insert") {
      console.log(form.value);
      let data = {
        name: form.value.name,
        email: form.value.email,
        contact: form.value.contact
      }

      this.crudservice.insertData(data).subscribe((res: any) => {
        console.log("RES of insert:::::", res)
        this.route.navigate(['/list-candidate'])
        //this.toastr.success('Hello world!', 'Toastr fun!');
      });
    } else if (this.operation == "update") {
      let data = {
        id: this.id,
        name: form.value.name,
        email: form.value.email,
        contact: form.value.contact
      }

      this.crudservice.updateData(data).subscribe((res: any) => {
        console.log("RES of update:::::", res)
        this.route.navigate(['/list-candidate'])
      });
    }
  }

  save(form: NgForm) {
    console.log(form.value);
  }



}
