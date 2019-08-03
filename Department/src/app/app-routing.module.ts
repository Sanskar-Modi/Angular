import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{FetchComponent} from './fetch/fetch.component'

const routes: Routes = [
  {
    path:"a",
    component:FetchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
