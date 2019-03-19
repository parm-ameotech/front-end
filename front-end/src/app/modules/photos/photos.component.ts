import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  albumId: any;
  photos: any[];

  constructor(public photoService: PhotoService, public route: ActivatedRoute, public _location: Location) {
    this.route.params.subscribe(params => {
      this.albumId = params['id'];
    });
  }

  ngOnInit() {
    if(this.albumId){
      this.getPhotos(this.albumId);
    } else{
      this.goBack();
    }
  }

  goBack(){
    this._location.back();
  }

  getPhotos(id: any){
    this.photoService.getPhotos(id).
    then((photos: any[]) => {
        if(photos.length > 0){
          this.photos = photos.slice(0, 5);
        }
    }, (error: any) => {
        console.log(error);
    });
  }



}
