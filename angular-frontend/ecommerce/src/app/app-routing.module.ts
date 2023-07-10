import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpRequestListComponent } from './help-request-list/help-request-list.component';
import { UserSystemComponent } from './user-system/user-system.component';

const routes: Routes = [
  { path: '', component: UserSystemComponent }, 
  { path: 'help-request-list', component: HelpRequestListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
