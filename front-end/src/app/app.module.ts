import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './modules/users/users.component';
import { AlbumsComponent } from './modules/albums/albums.component';
import { PhotosComponent } from './modules/photos/photos.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './services/base.service';
import { UserService } from './services/user.service';
import { AlbumService } from './services/album.service';
import { PhotoService } from './services/photo.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BaseService, UserService, AlbumService, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
