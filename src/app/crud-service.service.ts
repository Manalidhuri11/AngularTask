import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private httpClient: HttpClient) { }

  public insertData(data){
    
    
    return this.httpClient.post('http://localhost:8080/crudUsingPHP/insert.php', data);
  
  }

  public showData(){
    return this.httpClient.get('http://localhost:8080/crudUsingPHP/select.php');
  }
  
  public deleteData(data){
    
    return this.httpClient.post('http://localhost:8080/crudUsingPHP/delete.php', data);
  }


  public updateData(data){
    return this.httpClient.post('http://localhost:8080/crudUsingPHP/update.php',data);
  }

  public selectSingleRecord(data){
    return this.httpClient.post('http://localhost:8080/crudUsingPHP/selectSingleRecord.php',data);
  }
  
}
