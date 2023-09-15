import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

let Page404Component;
const routes: Routes = [
  {path: 'first-component', component: Headers},
  {path: '', redirectTo: 'FirstComponent', pathMatch: 'full'},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
