import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListCandidateComponent,
    AddUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
