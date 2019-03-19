import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})

export class AlbumService {
    constructor(private httpService: BaseService) { }

    getAlbums(id: string)
    {
        let url = "/albums?userId=" + id;
        return this.httpService.get(url);
    }

}