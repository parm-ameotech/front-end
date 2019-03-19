import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './modules/users/users.component';
import { AlbumsComponent } from './modules/albums/albums.component';
import { PhotosComponent } from './modules/photos/photos.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/users' },
    { path: 'users', component: UsersComponent },
    { path: 'albums/:id', component: AlbumsComponent },
    { path: 'photos/:id', component: PhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
