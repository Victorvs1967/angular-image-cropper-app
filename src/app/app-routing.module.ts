import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropImageComponent } from './components/crop-image/crop-image.component';

const routes: Routes = [
  { path: '', redirectTo: 'crop', pathMatch: 'full' },
  { path: 'crop', component: CropImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
