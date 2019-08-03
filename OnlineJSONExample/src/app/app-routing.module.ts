import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PersonlistComponent} from './personlist/personlist.component'

const routes: Routes = [
 {
  path:'personRoute',
  component:PersonlistComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
