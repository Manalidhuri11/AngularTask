import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path:'',redirectTo:'list-candidate',pathMatch:'full'},
  {path:'list-candidate', component: ListCandidateComponent },
  {path:'add-user', component: AddUserComponent},
  {path:'add-user/:id', component: AddUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
