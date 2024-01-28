import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EBookComponent } from './components/e-book/e-book.component';

const routes: Routes = [
  { path: 'ebook', component: HomeComponent },
  { path: '', component: EBookComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
