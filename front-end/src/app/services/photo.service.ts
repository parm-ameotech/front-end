import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})

export class PhotoService {
    constructor(private httpService: BaseService) { }

    getPhotos(id: string)
    {
        let url = "/photos?albumId=" + id;
        return this.httpService.get(url);
    }

}