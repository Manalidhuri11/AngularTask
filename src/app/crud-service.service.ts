import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private httpClient: HttpClient) { }

  public insertData(data) {


    // return this.httpClient.post('http://localhost:8080/crudUsingPHP/insert.php', data);
    return this.httpClient.post('http://127.0.0.1:8000/api/insertUser', data);

  }

  public showData() {
    // return this.httpClient.get('http://localhost:8080/crudUsingPHP/select.php');
    return this.httpClient.get('http://127.0.0.1:8000/api/showData');
  }

  public deleteData(data) {

    // return this.httpClient.post('http://localhost:8080/crudUsingPHP/delete.php', data);
    return this.httpClient.delete(`http://127.0.0.1:8000/api/deleteDataById/${data.Id}`);
  }


  public deleteMultipleData(data) {


    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: data
    }

    // return this.httpClient.post('http://localhost:8080/crudUsingPHP/delete.php', data);
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteMultipleUser', options);
  }


  updateData(data) {
    //return this.httpClient.post('http://localhost:8080/crudUsingPHP/update.php',data);
    let params = new HttpParams;
    params = params.set('name', data.name);
    params = params.set('email', data.email);
    params = params.set('contact', data.contact);

    const body = {};

    return this.httpClient.put(`http://127.0.0.1:8000/api/updateData/${data.id}`, body, { params });
  }

  selectSingleRecord(data) {
    console.log("data--->", data)
    // return this.httpClient.post('http://localhost:8080/crudUsingPHP/selectSingleRecord.php',data);
    // return this.httpClient.post('http://127.0.0.1:8000/api/showDataById',data);
    return this.httpClient.get(`http://127.0.0.1:8000/api/showDataById/${data.id}`);

  }

}
