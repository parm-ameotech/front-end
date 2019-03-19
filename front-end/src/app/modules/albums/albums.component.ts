import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  userId: any;
  albums: any[];

  constructor(public albumService: AlbumService, public route: ActivatedRoute, public _location: Location) {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }

  ngOnInit() {
      if(this.userId){
          this.getAlbums(this.userId);
      } else{
        this.goBack();
      }
  }

  goBack(){
    this._location.back();
  }

  getAlbums(id: any){
    this.albumService.getAlbums(id).
    then((albums: any) => {
        this.albums = albums;
    }, (error: any) => {
        console.log(error);
  });
  }

}
